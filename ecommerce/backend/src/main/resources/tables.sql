SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 1;

CREATE Table `Categories` (
  `categoryID` integer not null AUTO_INCREMENT,
  `category` varchar (30),
  `description` varchar (30),
  PRIMARY KEY (`categoryID`)
);

CREATE Table `Products` (
  `productID` integer not null AUTO_INCREMENT,
  `productName` varchar (30),
  `productPrice` float,
  `productQTY` smallint (6),
  `description`  varchar (30),
  PRIMARY KEY (`productID`)
);

CREATE Table `Customers` (
  `customerID` integer not null AUTO_INCREMENT,
  `customerName` varchar (30),
  `email` varchar (50),
  `password`  varchar (30),
  `billingAddress` varchar (50),
  `defaultAddress` varchar (50),
  `country` varchar (45),
  `phone`  varchar (20),
  PRIMARY KEY (`customerID`)
);

CREATE Table `Orders` (
  `orderID` integer not null AUTO_INCREMENT,
  `ammount` integer,
  `orderAddress` varchar (50),
  `orderEmain` varchar (50),
  `orderDate` date,
  `orderStatus` varchar (10),
  `customerID` integer,
  PRIMARY KEY (`orderID`),
  CONSTRAINT FK_Custom FOREIGN KEY (`customerID`) REFERENCES `Customers` (`customerID`)
);

CREATE Table `product_category` (
  `productID` integer not null,
  `categoryID` integer not null,
  PRIMARY KEY (categoryID, productID),
  CONSTRAINT ProdCat_cat FOREIGN KEY (categoryID) REFERENCES Categories (categoryID) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT ProdCat_prod FOREIGN KEY (productID) REFERENCES Products (productID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE Table `order_details` (
  `orderID` integer not null,
  `productID` integer not null,
  `productPrice` float,
  `quantity` integer,
  PRIMARY KEY (orderID, productID),
  CONSTRAINT OrdDet_ord FOREIGN KEY (orderID) REFERENCES Orders (orderID) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT OrdDet_prod FOREIGN KEY (productID) REFERENCES Products (productID) ON DELETE CASCADE ON UPDATE CASCADE
);