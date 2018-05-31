DROP DATABASE IF EXISTS directory;
CREATE DATABASE directory;

\c directory;

CREATE TABLE categories (
 ID SERIAL PRIMARY KEY,
 name VARCHAR NOT NULL
);

CREATE TABLE subcategories (
 ID SERIAL PRIMARY KEY,
 name VARCHAR NOT NULL,
 image VARCHAR,
 categoriesID INTEGER
);

--change this to businesses
CREATE TABLE stores (
 ID SERIAL PRIMARY KEY,
 name VARCHAR NOT NULL,
 type VARCHAR,
 phone VARCHAR,
 address VARCHAR,
 photo VARCHAR,
 photo2 VARCHAR,
 photo3 VARCHAR,
 blurb VARCHAR,
 maps VARCHAR,
 subcategoryID INTEGER
);

INSERT INTO categories (ID, name)
 VALUES (1, 'FOOD'),
 (2, 'STORES'),
 (3, 'SERVICES'),
 (4, 'NIGHTLIFE');


 INSERT INTO subcategories (ID, name, image, categoriesID)
 VALUES (1, 'Restaurants', 'https://image.ibb.co/iXoY1J/almost.png', 1),
 (2, 'Bakerys', 'https://image.ibb.co/iXoY1J/almost.png', 1),
 (3, 'Shoe Stores', 'https://image.ibb.co/iXoY1J/almost.png', 2),
 (4, 'Clothing', 'https://image.ibb.co/iXoY1J/almost.png', 2),
 (5, 'Barbershop', 'https://image.ibb.co/iXoY1J/almost.png', 3),
 (6, 'Nail Salon', 'https://image.ibb.co/iXoY1J/almost.png', 3),
 (7, 'Bar', 'https://image.ibb.co/iXoY1J/almost.png', 4),
 (8, 'Lounge', 'https://image.ibb.co/iXoY1J/almost.png', 4)
 ;

--businesses
INSERT INTO stores (ID, name, type, phone, address, photo, photo2, photo3, blurb, maps, subcategoryID)
 VALUES (1, 'Tulcingo', 'Mexican Food', '718-300-2088', '88-08 Roosevelt Ave', 'https://image.ibb.co/iXoY1J/almost.png', 'https://image.ibb.co/iXoY1J/almost.png','https://image.ibb.co/iXoY1J/almost.png','blurb', 'google maps', 1),
(2, 'King River', 'Chinese', '718-300-2088', '88-08 Roosevelt Ave', 'https://image.ibb.co/iXoY1J/almost.png', 'https://image.ibb.co/iXoY1J/almost.png','https://image.ibb.co/iXoY1J/almost.png', 'blurb', 'google maps', 1)
 ;

CREATE TABLE sub_to_categories (
 subcategories_id INTEGER REFERENCES subcategories(ID),
  categories_id INTEGER REFERENCES categories(ID)
);

--Not needed because the stores have a column subcategorie_id already
CREATE TABLE stores_to_sub (
 stores_id INTEGER REFERENCES stores(ID),
 subcategories_id INTEGER REFERENCES subcategories(ID)
);


INSERT INTO sub_to_categories ( subcategories_id, categories_id )
   VALUES (1,1),
          (2,1),
          (3,2),
          (4,2),
          (5,3),
          (6,3),
          (7,4),
          (8,4);

INSERT INTO stores_to_sub ( stores_id, subcategories_id )
   VALUES (1,1),
          (2,1);

