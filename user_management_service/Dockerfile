FROM node:8

COPY . /users 

EXPOSE 3333

# Change Working Directory
WORKDIR ./users/user_management_api

# Install dependencies
RUN npm i -g @adonisjs/cli
RUN npm install 

CMD adonis serve --dev
