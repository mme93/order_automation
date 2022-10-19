FROM node:14.15-alpine as build
WORKDIR /app
COPY package*.json /app/
#RUN node --max-old-space-size=512 index.js
RUN npm install -g @angular/cli
RUN npm install -g @ionic/cli
RUN npm install n latest
RUN npm audit fix
COPY ./ /app/
EXPOSE 8100
CMD ["ionic", "serve", "--external"]
