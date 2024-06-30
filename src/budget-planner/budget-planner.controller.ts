import { Controller, Get, Post } from '@nestjs/common';
import { BudgetPlannerService } from './budget-planner.service';
import { MessageType } from 'src/types';
import { dayBefore, formatDate } from 'src/helpers/util';

@Controller('budget-planner')
export class BudgetPlannerController {
  constructor(private readonly budgetPlannerService: BudgetPlannerService) {}

  // @Get()
  @Get('test')
  getHello2(): string {
    return this.budgetPlannerService.getHello();
  }

  @Post('setMessage')
  async setMessage(message: MessageType): Promise<string> {
    try {
      let messageText: string = '';
      switch (true) {
        case /(\d+)\s*(.*)/.test(message.text):
          const expenseDto: any = {
            price: parseFloat(message.text),
            description: message.text.includes(' ')
              ? message.text.split(' ')[1]
              : '',
            date: new Date(),
          };

          const data = await this.budgetPlannerService.addExpense(expenseDto);
          if (data?.price) {
            messageText = 'expense saved';
          }
          break;
        case /^\/reports/.test(message.text):
          // if(message.text.split(' ').length)
          if (message.text.split(' ').length == 1) {
            messageText = `You can get reports which are below;\nreports week: return last week reports\nreports month: return last month reports\nreports day: return last day reports\n`;
            break;
          }
          let startDate = null;
          switch (message.text.split(' ')[1]) {
            case 'week':
              startDate = dayBefore(7);
              break;
            case 'month':
              startDate = dayBefore(30);
              break;
            case 'day':
              startDate = dayBefore(1);
              break;
            default:
              messageText = `${message.text.split(' ')[1]} doesn't support, example reports are below;\nreports week: return last week reports\nreports month: return last month reports\nreports day: return last day reports\n`;
          }
          await this.budgetPlannerService
            .getExpensesBetweenDates(startDate, new Date())
            .then((e) => {
              const sum: number = e.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price;
              }, 0);
              messageText = `Your total expense was last ${message.text.split(' ')[1]}: ${sum}€`;
            })
            .catch((error) => {
              console.log(error);
              messageText = JSON.stringify(error);
            });
          break;
        case /\/notes/.test(message.text):
          await this.budgetPlannerService
            .getNotes()
            .then((e) => {
              if (e.length > 0) {
                e.forEach((item: any) => {
                  messageText += `${formatDate(item.date)}-${item.name}\n`;
                });
              } else {
                messageText = 'your note list is empty';
              }
            })
            .catch((error) => {
              console.log(error);
              messageText = JSON.stringify(error);
            });
          break;
        case /^\/rm notes/.test(message.text):
          await this.budgetPlannerService.deleteAllNotes();
          messageText = 'All notes removed';
          break;
        default:
          const noteDto: any = {
            name: message.text,
            date: new Date(),
          };

          await this.budgetPlannerService
            .addNote(noteDto)
            .then(() => {
              messageText = 'note saved';
            })
            .catch((error) => {
              console.log(error);
              messageText = JSON.stringify(error);
            });
          break;
      }
      return messageText;
    } catch (error) {
      console.error('Error setting message:', error);
    }
  }
}
