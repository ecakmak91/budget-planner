FROM node
WORKDIR opt/budget-planner
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]