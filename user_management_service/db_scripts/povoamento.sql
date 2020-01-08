INSERT INTO `okapi_users`.`user`
	(`user_id`,`name`,`username`,`gender`,`birthday`)VALUES(1,"Rui","Skittles","macho",date("2017-06-15"));

INSERT INTO `okapi_users`.`user`
	(`user_id`,`name`,`username`,`gender`,`birthday`)VALUES(2,"Paula","Bitocas","macha",date("2017-06-15"));

INSERT INTO `okapi_users`.`body_measurement`
	(`id`,`user_id`,`chest`,`waist`,`hips`,`foot_size`)VALUES(1,1,86,71,89,41);

INSERT INTO `okapi_users`.`body_measurement`
	(`id`,`user_id`,`chest`,`waist`,`hips`,`foot_size`)VALUES(2,2,91,66,91,37);

INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(1,1);

INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(1,2);
    
INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(1,11);
    
INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(1,19);
    
INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(2,1);

INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(2,2);
    
INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(2,11);
    
INSERT INTO `okapi_users`.`like`
	(`user_id`,`item_id`)VALUES(2,19);