FROM mysql

ENV MYSQL_ROOT_PASSWORD=pass

# Create schemas
ADD ./db_scripts/create_catalog.sql /docker-entrypoint-initdb.d
ADD ./db_scripts/create_users.sql /docker-entrypoint-initdb.d

# Populate scripts
ADD ./db_scripts/pop_catalog.sql /docker-entrypoint-initdb.d

EXPOSE 3306

COPY ./dump /dump
