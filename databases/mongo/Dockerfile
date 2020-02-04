FROM mongo

COPY setup.js /docker-entrypoint-initdb.d/


EXPOSE 27017

ENV MONGO_INITDB_DATABASE=adviser
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root

COPY ./dump /dump 
