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
 category_name VARCHAR
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
 subcategory_name VARCHAR
);

INSERT INTO categories (ID, name)
 VALUES (1, 'food'),
 (2, 'stores'),
 (3, 'services'),
 (4, 'nightlife');


 INSERT INTO subcategories (ID, name, image, category_name)
 VALUES (1, 'restaurants', 'https://image.ibb.co/iXoY1J/almost.png', 'food'),
 (2, 'bakerys', 'https://image.ibb.co/iXoY1J/almost.png', 'food'),
 (3, 'shoe stores', 'https://image.ibb.co/iXoY1J/almost.png', 'stores'),
 (4, 'clothing', 'https://image.ibb.co/iXoY1J/almost.png', 'stores'),
 (5, 'barbershop', 'https://image.ibb.co/iXoY1J/almost.png', 'services'),
 (6, 'nail Salon', 'https://image.ibb.co/iXoY1J/almost.png', 'services'),
 (7, 'bar', 'https://image.ibb.co/iXoY1J/almost.png', 'nightlife'),
 (8, 'lounge', 'https://image.ibb.co/iXoY1J/almost.png', 'nightlife')
 ;

--businesses
INSERT INTO stores (ID, name, type, phone, address, photo, photo2, photo3, blurb, maps, subcategory_name)
 VALUES (1, 'Tulcingo', 'Mexican Food', '718-300-2088', '88-08 Roosevelt Ave', 'https://image.ibb.co/iXoY1J/almost.png', 'https://image.ibb.co/iXoY1J/almost.png','https://image.ibb.co/iXoY1J/almost.png','blurb', 'google maps', 'restaurants'),
(2, 'King River', 'Chinese', '718-300-2088', '88-08 Roosevelt Ave', 'https://image.ibb.co/iXoY1J/almost.png', 'https://image.ibb.co/iXoY1J/almost.png','https://image.ibb.co/iXoY1J/almost.png', 'blurb', 'google maps', 'restaurants')
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

