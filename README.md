# Budget Planner

It is budget planner chatbot for telegram. I developed this application because of want to use Nest.js, Mongo, Docker and typscript.

---

## Description

- This app is able to take note your expenses.
- Can show your total price of expenses last day/week/month
- Can get save/show/delete your notes

"If my heart desires, I can improve. - Emre Cakmak"

---

## Installation

--- You must create a telegram bot. if you dont know how I put a video for that at below.
[![Tutorial Video](https://www.youtube.com/watch?v=aNmRNjME6mE)](https://www.youtube.com/watch?v=aNmRNjME6mE)

--- You must add your Telegram token to the line I've shown in the Docker-compose.yml file.

```bash
TELEGRAM_TOKEN={YOUR_TOKEN_HERE}
```

--- If you want you can change other environment variables

--- Finally you can build and up that compose

```bash
docker-compose up
```

---

## Examples

```bash
- 19.23 food -> It saves food expense price is 19.23 euro
- reports
    - /reports day -> It shows your today expensens
    - /reports week -> It shows your week expensens
    - /reports month -> It shows your month expensens
- any text -> It takes your note
- /notes -> It lists your notes
- /rm-notes - It removes all notes

```

## Stay in touch

- Author - [Emre Cakmak](https://linkedin.com/in/ecakmak91)

## License

Nest is [MIT licensed](LICENSE).
