DROP DATABASE IF EXISTS nordstrom;
CREATE DATABASE nordstrom;
USE nordstrom;

CREATE TABLE products(
  id                   SERIAL               NOT NULL,
  name                 VARCHAR(255)         NOT NULL,
  imgUrl               VARCHAR(255)         NOT NULL,
  type                 VARCHAR(25)          NOT NULL,
  rating               DECIMAL(18,2)        NOT NULL,
  brand                VARCHAR(255)         NOT NULL,
  price                DECIMAL(18,2)        NOT NULL,
  description          VARCHAR(255)         NOT NULL,
  size                 VARCHAR(255)         NOT NULL,
  color                VARCHAR(255)         NOT NULL,
  productUrl           VARCHAR(255)         NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE looks(
  id                    SERIAL              NOT NULL,
  name                  VARCHAR(255)        NOT NULL,
  creator               VARCHAR(255)        NOT NULL,
  creatorImgUrl         VARCHAR(255)        NOT NULL,
  tops                  INT,
  bottoms               INT,
  footwear              INT,
  headgear              INT,
  onepiece              INT,
  accessories1          INT,
  accessories2          INT,
  accessories3          INT,
  accessories4          INT,
  PRIMARY KEY(id)
);

CREATE TABLE looksJunc(
  id                SERIAL                  NOT NULL,
  lookId        INT REFERENCES looks(id)    NOT NULL,
  productId     INT REFERENCES products(id) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE carouselJunc(
  id                SERIAL                  NOT NULL,
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
