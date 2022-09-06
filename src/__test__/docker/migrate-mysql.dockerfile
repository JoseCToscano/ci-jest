FROM node:10-alpine

RUN apk add --no-cache bash
RUN apk add --no-cache coreutils

COPY src/__test__/docker/package*.json src/__test__/docker/wait-for-it.sh /opt/setup/
COPY src/__test__/docker/init.sql /docker-entrypoint-initdb.d/

WORKDIR /opt/setup

VOLUME /opt/setup/target

RUN chmod +x ./wait-for-it.sh

RUN npm install