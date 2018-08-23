-- DROP DATABASE IF EXISTS directory;
-- CREATE DATABASE directory;

-- \c directory;

DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS subcategories CASCADE;
DROP TABLE IF EXISTS stores CASCADE;
DROP TABLE IF EXISTS sub_to_categories CASCADE;

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
--data imput validation
--load table comands

CREATE TABLE stores (
 ID SERIAL PRIMARY KEY,
 name VARCHAR NOT NULL,
 type VARCHAR,
 phone VARCHAR,
 address VARCHAR,
 mon VARCHAR,
tues VARCHAR,
wed VARCHAR,
thurs VARCHAR,
fri VARCHAR,
sat VARCHAR,
sun VARCHAR,
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
 VALUES  (1,'lounge','http://source.unsplash.com/ak-PMKPQEAc','nightlife'),
(2,'bars','https://source.unsplash.com/VZY6o3Q0EEI','nightlife'),
(3,'clubs','https://source.unsplash.com/MU5ld71rDcs','nightlife'),
(4,'nail salon','https://source.unsplash.com/Xa8fX8bQCgs','services'),
(5,'barbershop','https://source.unsplash.com/m8UvH75I2lI','services'),
(6,'women hair salon','https://source.unsplash.com/PtOfbGkU3uI','services'),
(7,'laundromat','https://source.unsplash.com/o7SvheEZoks','services'),
(8,'fresh groceries','https://source.unsplash.com/SAPvKo12dQE','food'),
(9,'supermarket','https://source.unsplash.com/2mhqft65NIo','food'),
(10,'beauty supplies','https://source.unsplash.com/BkaD07QEiJc','stores'),
(11,'pharmacy','https://source.unsplash.com/JuKgTqhSS5M','services'),
(12,'dentist','https://source.unsplash.com/kdoaOFGE9QM','services'),
(13,'winery','https://source.unsplash.com/W4Gwb-xz_fA','food'),
(14,'convenience store','https://source.unsplash.com/-IWFiQtjwkc','stores'),
(15,'coffeeshop','https://source.unsplash.com/KgziKKUyJVA','food'),
(16,'internet-cafe','https://source.unsplash.com/6o4uc16IkDs','food'),
(17,'religious stores','https://source.unsplash.com/wkn_KHBExcE','stores'),
(18,'electronic stores','https://source.unsplash.com/yFnX8DaC3UM','services'),
(19,'hardware stores','https://source.unsplash.com/t5YUoHW6zRo','services'),
(20,'breakfast','https://source.unsplash.com/IylDgTHzOUs','food'),
(21,'organic food','https://source.unsplash.com/inJF419mrPE','food'),
(22,'mexican food','https://source.unsplash.com/7sStoaxfJh0','food'),
(23,'gown dresses (sweet16/wedding)','https://source.unsplash.com/p7v6X41PP4w','stores'),
(24,'mexican clothes','https://source.unsplash.com/1w7OXUu83cM','stores'),
(25,'carniseria','https://source.unsplash.com/UspMYswGQ5M','food'),
(26,'bakery','https://source.unsplash.com/8Jg4U4xHu-o','food'),
(27,'eyewear','https://source.unsplash.com/UsALNdok2m4','services'),
(28,'dry cleaners','https://source.unsplash.com/YbGMa1Jz1yY','services'),
(29,'eyebrow thread','https://source.unsplash.com/cowLgyb63c4','services'),
(30,'sneaker store','https://source.unsplash.com/o1QdvWV9okI','stores'),
(31,'juice stands','https://source.unsplash.com/DSxurmhrfuc','food'),
(32,'bank','https://source.unsplash.com/fJTqyZMOh18','services'),
(33,'phone companies','https://source.unsplash.com/1giBTF3G4EE','services'),
(34,'pizzeria','https://source.unsplash.com/KxbdAZx8Uqs','food'),
(35,'tattoo/piercing','https://source.unsplash.com/zOyOWsANHXo','services'),
(36,'jewelry stores','https://source.unsplash.com/f5Y_m2bD_Tw','stores'),
(37,'party stores','https://source.unsplash.com/0yTVA0TIq5o','stores'),
(38,'baby stores','https://source.unsplash.com/p0hDztR46cw','stores'),
(39,'gym','https://source.unsplash.com/WvDYdXDzkhs','services'),
(40,'sport bar','https://source.unsplash.com/NGb5i1-M1hw','nightlife'),
(41,'repair shops (bike etc.)','https://source.unsplash.com/VkFhaQHVcE4','services')
 ;

--businesses
INSERT INTO stores (ID, name, type, phone, address, mon, tues, wed, thurs, fri, sat, sun, photo, photo2, photo3, blurb, maps, category_name, subcategory_name)
 VALUES (1, 'Tacos Al Suadero', 'Mexican Food', ' (718) 505-1025', '8812 Roosevelt Ave','7am - 5am','7am - 5am','7am - 5am','7am - 5am','7am - 5am','7am - 5am','7am - 5am', 'https://s3-media3.fl.yelpcdn.com/bphoto/VWIaD4Y2_-2xnKFZbisH7A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/RryLfgiE7EV6k2AsfViT5A/o.jpg','https://s3-media1.fl.yelpcdn.com/bphoto/DW1LaN66hAym4Oh-Ax_isw/o.jpg','The interior of the place is as festive as other similarly themed restaurants. There are ornaments, ribbons, and all sorts of colorful articles from wall to wall and across the ceiling. Seating is just enough for a few groups, but even then there isnt much room for dining here. As Spanish songs play in the background, its easy to feel like one is no longer in Queens.', 'https://www.google.com/maps/place/87-21+Roosevelt+Ave,+Jackson+Heights,+NY+11372','food', 'restaurants')
;

CREATE TABLE sub_to_categories (
 subcategories_id INTEGER REFERENCES subcategories(ID),
  categories_id INTEGER REFERENCES categories(ID)
);

--Not needed because the stores have a column subcategorie_id already
-- CREATE TABLE stores_to_sub (
--  stores_id INTEGER REFERENCES stores(ID),
--  subcategories_id INTEGER REFERENCES subcategories(ID)
-- );

-- --data normalization, this is an example of normalization, its needs to get fixed. 
-- -- need to do this for the stores. 

-- INSERT INTO sub_to_categories ( subcategories_id, categories_id )
--    VALUES (1,1),
--           (2,1),
--           (3,2),
--           (4,2),
--           (5,3),
--           (6,3),
--           (7,4),
--           (8,4);

-- INSERT INTO stores_to_sub ( stores_id, subcategories_id )
--    VALUES (1,1),
--           (2,1);

