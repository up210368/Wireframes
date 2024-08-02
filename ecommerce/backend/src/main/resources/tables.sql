SET NAMES utf8;

CREATE Table `Products` (
  `productID` integer not null AUTO_INCREMENT,
  `productName` varchar (30),
  `description`  varchar (30),
  `productPrice` float,
  `productQTY` smallint (6),
  `img1` varchar(255),
  `img2` varchar(255),
  `img3` varchar(255),
  PRIMARY KEY (`productID`)
);
