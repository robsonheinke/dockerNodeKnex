FROM node:alpine

WORKDIR /usr/dockerNodePgKnex

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2311

CMD ["npm", "start"]
