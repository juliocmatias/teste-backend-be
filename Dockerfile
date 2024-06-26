# Usar a imagem node:16.14-alpine como base
FROM node:16.14-alpine

WORKDIR /app-backend

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=${APP_PORT}

EXPOSE ${PORT}

ENTRYPOINT [ "npm", "run"]
CMD [ "start" ]
