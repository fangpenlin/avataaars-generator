FROM node:14-slim

COPY . .
RUN yarn install
CMD yarn start