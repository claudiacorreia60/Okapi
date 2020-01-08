FROM node:8

# Adds rapl and raplServer 

RUN mkdir raplServer

COPY . /proxy

# Change Working Directory
WORKDIR ./proxy 

# Ports 
EXPOSE 3334 

# Install dependencies
RUN npm i -g @adonisjs/cli
RUN npm install 

CMD adonis serve --dev


