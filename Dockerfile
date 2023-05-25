FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g expo-cli@6.3.7

CMD ["npm", "start"]