CREATE DATABASE if not EXISTS eCommerce;

CREATE user 'owner'@'localhost' IDENTIFIED BY 'owner';

GRANT all PRIVILEGES on eCommerce.*  to 'owner'@'localhost';