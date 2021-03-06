#Primera Etapa
FROM node:12-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8040

CMD [ "npm", "run", "start" ]

