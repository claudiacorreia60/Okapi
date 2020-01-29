
docker exec okapi_mongo_1 mongorestore --host localhost --port 27017 --db adviser -u root -p root --authenticationDatabase admin /dump/adviser
docker exec okapi_mysql_1 mysql -u root -ppass < dump/okapi_catalog-backup.sql