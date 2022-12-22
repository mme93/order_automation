FROM node:18.12.1-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g npm@9.2.0
RUN npm install -g @angular/cli
RUN npm install -g @ionic/cli
COPY ./ /app/
EXPOSE 8100
CMD ["ionic", "serve", "--external"]
