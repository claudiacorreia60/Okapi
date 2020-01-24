=== DATABASE DUMPS in folder /<rdms>/dump

=== Mysql 

= dump (on container)
mysqldump -u root -ppass okapi_catalog --single-transaction --quick --lock-tables=false --port=3306 --host=localhost > dump/okapi_catalog-backup.sql

= restore (on container)
mysql -u <user> -p < db_backup.dump


=== Mongo (on container)

= dump 
mongodump --host localhost --port 27017 --db adviser -u root -p root --authenticationDatabase admin

= restore
mongorestore --host localhost --port 27017 --db adviser <path_to>/mongo/dump/adviser

