CREATE DATABASE eat_burger;
USE eat_burger;
CREATE TABLE burgers
(
ID int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
date TIMESTAMP,
PRIMARY KEY (ID)
);

SHOW COLUMNS FROM burgers;

SELECT * FROM burgers;
