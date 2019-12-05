INSERT INTO `okapi_catalog`.`brand`
	(`name`, `website`)
VALUES
	('Lion of Porches','https://www.lionofporches.pt/');

INSERT INTO `okapi_catalog`.`brand`
	(`name`, `website`)
VALUES
	('Ana Sousa','https://www.anasousa.com/pt/');

INSERT INTO `okapi_catalog`.`brand`
	(`name`, `website`)
VALUES
	('Zara','https://www.zara.com/pt/'); 
    
INSERT INTO `okapi_catalog`.`color`
	(`name`,`rgb_red`,`rgb_green`,`rgb_blue`,`hexadecimal`)
VALUES
	('Azul',0,0,255,'#0000FF');
    
INSERT INTO `okapi_catalog`.`color`
	(`name`,`rgb_red`,`rgb_green`,`rgb_blue`,`hexadecimal`)
VALUES
	('Amarelo',255,255,0,'#FFFF00');
    
INSERT INTO `okapi_catalog`.`color`
	(`name`,`rgb_red`,`rgb_green`,`rgb_blue`,`hexadecimal`)
VALUES
	('Vermelho',255,0,0,'#FF0000');

INSERT INTO `okapi_catalog`.`color`
	(`name`,`rgb_red`,`rgb_green`,`rgb_blue`,`hexadecimal`)
VALUES
	('Verde',0,255,0,'#00FF00');

INSERT INTO `okapi_catalog`.`material`
	(`name`)
VALUES
	('Viscose');

INSERT INTO `okapi_catalog`.`material`
	(`name`)
VALUES
	('Nylon');
    
INSERT INTO `okapi_catalog`.`material`
	(`name`)
VALUES
	('Elastano');

INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('T-shirt','Upper body');
    
INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Saia','Lower body');
    
INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Calças','Lower body');

INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Jeans','Lowes body');

INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Camisa','Upper body');

INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Sapatilhas','Shoes');
    
INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Sapatos','Shoes');
    
INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Chinelos','Shoes');

INSERT INTO `okapi_catalog`.`type`
	(`name`,`body_part`)
VALUES
	('Vestido','Full');

INSERT INTO `okapi_catalog`.`item`
	(`item_id`,`brand_id`,`color_id`,`type_id`,`price`,`gender`,`description`,`url`,`reference`,`photo`,`catalog`)
VALUES
	(1,1,1,9,12.99,'W','Vestido manga 3/4','','shorturl.at/jvRS1','Vestido manga 3/4',1);

INSERT INTO `okapi_catalog`.`item_material`
	(`item_id`,`material_id`,`weight`)
VALUES
	(1,1,70.0);

INSERT INTO `okapi_catalog`.`item_material`
	(`item_id`,`material_id`,`weight`)
VALUES
	(1,2,25.0);
    
INSERT INTO `okapi_catalog`.`item_material`
	(`item_id`,`material_id`,`weight`)
VALUES
	(1,3,5.0);
