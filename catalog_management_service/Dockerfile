FROM node:8

COPY . /catalog 

EXPOSE 3331

# Change Working Directory
WORKDIR ./catalog/catalog_management_api

# Install dependencies
RUN npm i -g @adonisjs/cli
RUN npm install 

CMD adonis serve --dev
