FROM node:8

COPY . /virtual_closet

EXPOSE 3330

# Change Working Directory
WORKDIR ./virtual_closet/virtual_closet_management_api

# Install dependencies
RUN npm i -g @adonisjs/cli
RUN npm install 

CMD adonis serve --dev
