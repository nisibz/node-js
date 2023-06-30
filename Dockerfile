FROM node:16-alpine AS builder

WORKDIR /source

COPY ./package* .
RUN npm install

COPY . .

CMD [ "npm" , "start" ]

