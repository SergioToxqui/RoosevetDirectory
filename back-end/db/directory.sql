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
 hours VARCHAR,
 photo VARCHAR,
 photo2 VARCHAR,
 photo3 VARCHAR,
 blurb VARCHAR,
 maps VARCHAR,
 category_name VARCHAR,
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
INSERT INTO stores (ID, name, type, phone, address, hours, photo, photo2, photo3, blurb, maps, category_name, subcategory_name)
 VALUES (1, 'Tacos Al Suadero', 'Mexican Food', ' (718) 505-1025', '8812 Roosevelt Ave','Mon 7:00 am - 5:00 am Tue 7:00 am - 5:00 am Wed 7:00 am - 5:00 am Thu 7:00 am - 5:00 am Fri 7:00 am - 5:00 am Sat 7:00 am - 5:00 am Sun 7:00 am - 5:00 am' , 'https://s3-media3.fl.yelpcdn.com/bphoto/VWIaD4Y2_-2xnKFZbisH7A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/RryLfgiE7EV6k2AsfViT5A/o.jpg','https://s3-media1.fl.yelpcdn.com/bphoto/DW1LaN66hAym4Oh-Ax_isw/o.jpg','The interior of the place is as festive as other similarly themed restaurants. There are ornaments, ribbons, and all sorts of colorful articles from wall to wall and across the ceiling. Seating is just enough for a few groups, but even then there isnt much room for dining here. As Spanish songs play in the background, its easy to feel like one is no longer in Queens.', '<iframe
  width="600"
  height="450"
  frameborder="0" style="border:0"
  src="https://www.google.com/maps/place/87-21+Roosevelt+Ave,+Jackson+Heights,+NY+11372" allowfullscreen>
</iframe>','food', 'restaurants'),
(2, 'King River', 'Chinese', '718-300-2088', '88-08 Roosevelt Ave', ' hours', 'https://image.ibb.co/iXoY1J/almost.png', 'https://image.ibb.co/iXoY1J/almost.png','https://image.ibb.co/iXoY1J/almost.png', 'blurb', 'google maps','food', 'restaurants')
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

