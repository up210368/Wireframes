CREATE DATABASE IF NOT EXISTS ecommerce;

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

GRANT ALL PRIVILEGES ON ecommerce.* TO 'admin'@'localhost';

flush privileges;