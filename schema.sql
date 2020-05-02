DROP DATABASE IF EXISTS Nordstrom;
CREATE DATABASE Nordstrom;
USE Nordstrom;

CREATE TABLE products(
  id                   INT                  NOT NULL,
  name                 VARCHAR(255)         NOT NULL,
  imgUrl               VARCHAR(255)         NOT NULL,
  type                 VARCHAR(25)          NOT NULL,
  rating               DECIMAL(18,2)        NOT NULL,
  brand                VARCHAR(255)         NOT NULL,
  price                DECIMAL(18,2)        NOT NULL,
  description          VARCHAR(255)         NOT NULL,
  sizes                VARCHAR(255)         NOT NULL,
  availableSizes       VARCHAR(255)         NOT NULL,
  colors               VARCHAR(255)         NOT NULL,
  availableColors      VARCHAR(255)         NOT NULL,
  productUrl           VARCHAR(255)         NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE looks(
  id                    INT                 NOT NULL,
  name                  VARCHAR(255)        NOT NULL,
  creator               VARCHAR(255)        NOT NULL,
  creatorImgUrl         VARCHAR(255)        NOT NULL,
  tops                  INT                 NOT NULL,
  bottoms               INT                 NOT NULL,
  footwear              INT                 NOT NULL,
  headgear              INT                 NOT NULL,
  onepiece              INT                 NOT NULL,
  accessories1          INT                 NOT NULL,
  accessories2          INT                 NOT NULL,
  accessories3          INT                 NOT NULL,
  accessories4          INT                 NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE looksJunc(
  id                INT                     NOT NULL,
  lookId        INT REFERENCES looks(id)    NOT NULL,
  productId     INT REFERENCES products(id) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE carouselJunc(
  id                INT                     NOT NULL,
  type              VARCHAR(255)            NOT NULL,
  lookId        INT REFERENCES looks(id)    NOT NULL,
  productId1    INT REFERENCES products(id) NOT NULL,
  productId2    INT REFERENCES products(id) NOT NULL,
  productId3    INT REFERENCES products(id) NOT NULL,
  PRIMARY KEY(id)
);

ALTER TABLE looks ADD CONSTRAINT constraint_fk_tops FOREIGN KEY (tops) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_bottoms FOREIGN KEY (bottoms) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_footwear FOREIGN KEY (footwear) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_headgear FOREIGN KEY (headgear) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_onepiece FOREIGN KEY (onepiece) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_accessories1 FOREIGN KEY (accessories1) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_accessories2 FOREIGN KEY (accessories2) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_accessories3 FOREIGN KEY (accessories3) REFERENCES carouselJunc (id);
ALTER TABLE looks ADD CONSTRAINT constraint_fk_accessories4 FOREIGN KEY (accessories4) REFERENCES carouselJunc (id);

-- INSERT INTO products (id, name, imgUrl, type, rating, brand, price, description, sizes, availableSizes, colors, availableColors, productUrl) VALUES (1, 'test', 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/Footwear/bfa5f26f-acbe-4352-a285-e9ddb3b7d558.jpeg', 'footwear', 5, 'Nike', 55.12, 'cool shoes', '10, 11, 12', '11', 'blue', 'blue', 'localhost:3000');