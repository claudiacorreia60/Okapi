-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema okapi_catalog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema okapi_catalog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `okapi_catalog` DEFAULT CHARACTER SET utf8 ;
USE `okapi_catalog` ;

-- -----------------------------------------------------
-- Table `okapi_catalog`.`cor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`cor` (
  `cor_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `rgb_red` INT(3) NULL,
  `rgb_green` INT(3) NULL,
  `rgb_blue` INT(3) NULL,
  `hexadecimal` VARCHAR(7) NULL,
  PRIMARY KEY (`cor_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`marca` (
  `marca_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `site` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`marca_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`tipo` (
  `tipo_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `parte_corpo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tipo_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`item` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `marca_id` INT NOT NULL,
  `cor_id` INT NULL,
  `tipo_id` INT NOT NULL,
  `preco` FLOAT NULL,
  `sexo` CHAR(1) NULL,
  `descricao` VARCHAR(500) NULL,
  `url` VARCHAR(45) NOT NULL,
  `referencia` VARCHAR(45) NOT NULL,
  `fotografia` VARCHAR(45) NULL,
  `catalogo` TINYINT NOT NULL,
  PRIMARY KEY (`item_id`),
  INDEX `fk_item_1_idx` (`marca_id` ASC),
  INDEX `fk_item_2_idx` (`cor_id` ASC),
  INDEX `fk_item_3_idx` (`tipo_id` ASC),
  CONSTRAINT `fk_item_1`
    FOREIGN KEY (`marca_id`)
    REFERENCES `okapi_catalog`.`marca` (`marca_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_item_2`
    FOREIGN KEY (`cor_id`)
    REFERENCES `okapi_catalog`.`cor` (`cor_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_item_3`
    FOREIGN KEY (`tipo_id`)
    REFERENCES `okapi_catalog`.`tipo` (`tipo_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`material` (
  `material_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`material_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`item_material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`item_material` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_id` INT NOT NULL,
  `material_id` INT NOT NULL,
  `fator` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_item_material_1_idx` (`item_id` ASC),
  INDEX `fk_item_material_2_idx` (`material_id` ASC),
  CONSTRAINT `fk_item_material_1`
    FOREIGN KEY (`item_id`)
    REFERENCES `okapi_catalog`.`item` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_material_2`
    FOREIGN KEY (`material_id`)
    REFERENCES `okapi_catalog`.`material` (`material_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`item_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`item_tag` (
  `tag_id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tag_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`caracteristica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`caracteristica` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_caracteristica_1_idx` (`item_id` ASC),
  CONSTRAINT `fk_caracteristica_1`
    FOREIGN KEY (`item_id`)
    REFERENCES `okapi_catalog`.`item` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_caracteristica_2`
    FOREIGN KEY (`tag_id`)
    REFERENCES `okapi_catalog`.`item_tag` (`tag_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`embedding`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`embedding` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_id` INT NOT NULL,
  `vetor` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_embedding_item1_idx` (`item_id` ASC),
  CONSTRAINT `fk_embedding_item1`
    FOREIGN KEY (`item_id`)
    REFERENCES `okapi_catalog`.`item` (`item_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
