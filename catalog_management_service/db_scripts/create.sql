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
-- Table `okapi_catalog`.`color`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`color` (
  `color_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `rgb_red` INT(3) NULL,
  `rgb_green` INT(3) NULL,
  `rgb_blue` INT(3) NULL,
  `hexadecimal` VARCHAR(7) NULL,
  PRIMARY KEY (`color_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`brand` (
  `brand_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `website` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`brand_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`type` (
  `type_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `body_part` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`type_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`item` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `brand_id` INT NOT NULL,
  `color_id` INT NULL,
  `type_id` INT NOT NULL,
  `price` FLOAT NULL,
  `gender` CHAR(1) NULL,
  `description` VARCHAR(500) NULL,
  `url` VARCHAR(45) NOT NULL,
  `reference` VARCHAR(45) NOT NULL,
  `photo` VARCHAR(45) NULL,
  `catalog` TINYINT NOT NULL,
  PRIMARY KEY (`item_id`),
  INDEX `fk_item_1_idx` (`brand_id` ASC),
  INDEX `fk_item_2_idx` (`color_id` ASC),
  INDEX `fk_item_3_idx` (`type_id` ASC),
  CONSTRAINT `fk_item_1`
    FOREIGN KEY (`brand_id`)
    REFERENCES `okapi_catalog`.`brand` (`brand_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_item_2`
    FOREIGN KEY (`color_id`)
    REFERENCES `okapi_catalog`.`color` (`color_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_item_3`
    FOREIGN KEY (`type_id`)
    REFERENCES `okapi_catalog`.`type` (`type_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`material` (
  `material_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`material_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`item_material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`item_material` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_id` INT NOT NULL,
  `material_id` INT NOT NULL,
  `weight` DECIMAL NOT NULL,
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
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tag_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_catalog`.`feature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_catalog`.`feature` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_feature_1_idx` (`item_id` ASC),
  CONSTRAINT `fk_feature_1`
    FOREIGN KEY (`item_id`)
    REFERENCES `okapi_catalog`.`item` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_feature_2`
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
