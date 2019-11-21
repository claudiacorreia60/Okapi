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
  `nome` VARCHAR(45) NOT NULL,
  `username` VARCHAR(15) NOT NULL,
  `sexo` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `fotografia` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`gostado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`gostado` (
  `user_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `item_id`),
  CONSTRAINT `fk_gostado_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `okapi_users`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`user_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`user_tag` (
  `tag_id` INT NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tag_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`interesse`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`interesse` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  `fator` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_tag_1_idx` (`user_id` ASC),
  INDEX `fk_user_tag_2_idx` (`tag_id` ASC),
  CONSTRAINT `fk_user_tag_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `okapi_users`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_tag_2`
    FOREIGN KEY (`tag_id`)
    REFERENCES `okapi_users`.`user_tag` (`tag_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `okapi_users`.`medidas_corpo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `okapi_users`.`medidas_corpo` (
  `id` INT NOT NULL,
  `user_id` INT NULL,
  `peito` INT NULL,
  `cintura` INT NULL,
  `anca` INT NULL,
  `calcado` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_medidas_corpo_1_idx` (`user_id` ASC),
  CONSTRAINT `fk_medidas_corpo_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `okapi_users`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
