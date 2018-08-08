--DROP DATABASE IF EXISTS directory;
--CREATE DATABASE directory;

--\c directory;

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
 VALUES (1, 'restaurants', 'https://image.ibb.co/iXoY1J/almost.png', 'food'),
 (2, 'bakerys', 'https://image.ibb.co/iXoY1J/almost.png', 'food'),
 (3, 'shoe stores', 'https://image.ibb.co/iXoY1J/almost.png', 'stores'),
 (4, 'clothing', 'https://image.ibb.co/iXoY1J/almost.png', 'stores'),
 (5, 'barbershop', 'https://image.ibb.co/iXoY1J/almost.png', 'services'),
 (6, 'nail Salon', 'https://image.ibb.co/iXoY1J/almost.png', 'services'),
 (7, 'bar', 'https://image.ibb.co/iXoY1J/almost.png', 'nightlife'),
 (8, 'lounge', 'https://image.ibb.co/iXoY1J/almost.png', 'nightlife'),
 (9,"lounge","http://source.unsplash.com/ak-PMKPQEAc","nightlife"),
(10,"bars","https://source.unsplash.com/VZY6o3Q0EEI","nightlife"),
(11,"clubs","https://source.unsplash.com/MU5ld71rDcs","nightlife"),
(12,"nail salon","https://source.unsplash.com/Xa8fX8bQCgs","services"),
(13,"barbershop","https://source.unsplash.com/m8UvH75I2lI","services"),
(14,"women hair salon","https://source.unsplash.com/PtOfbGkU3uI","services"),
(15,"laundromat","https://source.unsplash.com/o7SvheEZoks","services"),
(16,"fresh groceries","https://source.unsplash.com/SAPvKo12dQE","food"),
(17,"supermarket","https://source.unsplash.com/2mhqft65NIo","food"),
(18,"beauty supplies","https://source.unsplash.com/BkaD07QEiJc","stores"),
(19,"pharmacy","https://source.unsplash.com/JuKgTqhSS5M","services"),
(20,"dentist","https://source.unsplash.com/kdoaOFGE9QM","services"),
(21,"winery","https://source.unsplash.com/W4Gwb-xz_fA","food"),
(22,"convenience store","https://source.unsplash.com/-IWFiQtjwkc","stores"),
(23,"coffeeshop","https://source.unsplash.com/KgziKKUyJVA","food"),
(24,"internet-cafe","https://source.unsplash.com/6o4uc16IkDs","food"),
(25,"religious stores","https://source.unsplash.com/wkn_KHBExcE","stores"),
(26,"electronic stores","https://source.unsplash.com/yFnX8DaC3UM","services"),
(27,"hardware stores","https://source.unsplash.com/t5YUoHW6zRo","services"),
(28,"breakfast","https://source.unsplash.com/IylDgTHzOUs","food"),
(29,"american fast food","https://source.unsplash.com/Nb_Q-M3Cdzg","food"),
(30,"organic food","https://source.unsplash.com/inJF419mrPE","food"),
(31,"mexican food","https://source.unsplash.com/7sStoaxfJh0","food"),
(32,"gown dresses (sweet16/wedding)","https://source.unsplash.com/p7v6X41PP4w","stores"),
(33,"mexican clothes","https://source.unsplash.com/1w7OXUu83cM","stores"),
(34,"carniseria","https://source.unsplash.com/UspMYswGQ5M","food"),
(35,"bakery","https://source.unsplash.com/8Jg4U4xHu-o","food"),
(36,"eyewear","https://source.unsplash.com/UsALNdok2m4","services"),
(37,"dry cleaners","https://source.unsplash.com/YbGMa1Jz1yY","services"),
(38,"eyebrow thread","https://source.unsplash.com/cowLgyb63c4","services"),
(39,"sneaker store","https://source.unsplash.com/o1QdvWV9okI","stores"),
(40,"juice stands","https://source.unsplash.com/DSxurmhrfuc","food"),
(41,"bank","https://source.unsplash.com/fJTqyZMOh18","services"),
(42,"phone companies","https://source.unsplash.com/1giBTF3G4EE","services"),
(43,"pizzeria","https://source.unsplash.com/KxbdAZx8Uqs","food"),
(44,"tattoo/piercing","https://source.unsplash.com/zOyOWsANHXo","services"),
(45,"jewelry stores","https://source.unsplash.com/f5Y_m2bD_Tw","stores"),
(46,"party stores","https://source.unsplash.com/0yTVA0TIq5o","stores"),
(47,"baby stores","https://source.unsplash.com/p0hDztR46cw","stores"),
(48,"gym","https://source.unsplash.com/WvDYdXDzkhs","services"),
(49,"sport bar","https://source.unsplash.com/NGb5i1-M1hw","nightlife"),
(50,"repair shops (bike etc.)","https://source.unsplash.com/VkFhaQHVcE4","services")
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

