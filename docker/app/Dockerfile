FROM node:20.5.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ../.. .

ARG PORT
ENV PORT=${PORT}

ARG APP_NAME
ENV APP_NAME=${APP_NAME}

RUN npm install -g nodemon

LABEL authors="Rizal"

CMD ["npm","run","dev"]