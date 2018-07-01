FROM node:10.5.0-alpine
COPY package*.json npm-shrinkwrap.json /srv/app/chat/
WORKDIR /srv/app/chat
RUN npm i --production --quiet