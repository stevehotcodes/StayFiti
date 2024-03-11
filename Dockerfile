FROM node:21-alpine

WORKDIR /StayFiti

COPY package*.json ./

ENV PORT =5173

RUN npm install

COPY . .


EXPOSE  5173

CMD ["npm", "run", "dev"]