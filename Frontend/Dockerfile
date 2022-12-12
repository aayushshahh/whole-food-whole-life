FROM node:latest

WORKDIR /src

COPY . /src/

RUN npm install --only=production && npm install -g pm2

EXPOSE 3000

CMD [ "npm", "run", "start" ]