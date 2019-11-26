-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `okapi_users` DEFAULT CHARACTER SET utf8 ;
USE `okapi_users` ;

-- -----------------------------------------------------
-- Table `okapi_users`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(15) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `birthday` DATE NOT NULL,
  `photo` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`like` (
  `user_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `item_id`),
  CONSTRAINT `fk_like_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `okapi_users`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`tag` (
  `tag_id` INT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tag_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`interest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`interest` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  `weight` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tag_1_idx` (`user_id` ASC),
  INDEX `fk_tag_2_idx` (`tag_id` ASC),
  CONSTRAINT `fk_tag_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `okapi_users`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tag_2`
    FOREIGN KEY (`tag_id`)
    REFERENCES `okapi_users`.`tag` (`tag_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`body_measurement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`body_measurement` (
  `id` INT NOT NULL,
  `user_id` INT NULL,
  `chest` INT NULL,
  `waist` INT NULL,
  `hips` INT NULL,
  `foot_size` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_body_measurement_1_idx` (`user_id` ASC),
  CONSTRAINT `fk_body_measurement_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `okapi_users`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
