INSERT INTO categories (name, parent_category_id, image_url)
  VALUES 
    -- Main categories
    ('food', NULL, 'https://image.ibb.co/n8qvZS/food.png'),
    ('stores', Null, 'https://image.ibb.co/iafEeS/stores.png'),
    ('services', NULL, 'https://image.ibb.co/jW8BR7/services.png'),
    ('nightlife', NULL, 'https://image.ibb.co/iEJ0KS/nightlife.png'),

    -- Food subcategories
    ('fresh groceries', 1, 'https://source.unsplash.com/SAPvKo12dQE'),
    ('supermarket', 1, 'https://source.unsplash.com/2mhqft65NIo'),
    ('coffeeshop', 1, 'https://source.unsplash.com/KgziKKUyJVA'),
    ('winery', 1, 'https://source.unsplash.com/W4Gwb-xz_fA'),
    ('carniseria', 1, 'https://source.unsplash.com/UspMYswGQ5M'),
    ('mexican', 1, 'https://source.unsplash.com/7sStoaxfJh0'),
    ('organic food', 1, 'https://source.unsplash.com/inJF419mrPE'),
    ('breakfast', 1, 'https://source.unsplash.com/IylDgTHzOUs'),
    ('bakery', 1, 'https://source.unsplash.com/8Jg4U4xHu-o'),
    ('pizzeria', 1, 'https://source.unsplash.com/KxbdAZx8Uqs'),
    ('juice stands', 1, 'https://source.unsplash.com/DSxurmhrfuc'),
    ('chinese', 1, 'https://source.unsplash.com/3JFVNo4ukKQ'),

    -- Stores subcategories
    ('religious stores', 2, 'https://source.unsplash.com/wkn_KHBExcE'),
    ('beauty supplies', 2, 'https://source.unsplash.com/BkaD10QEiJc'),
    ('convenience store', 2, 'https://source.unsplash.com/-IWFiQtjwkc'),
    ('gown dresses (sweet16/wedding)', 2, 'https://source.unsplash.com/p7v6X41PP4w'),
    ('mexican clothes', 2, 'https://source.unsplash.com/1w7OXUu83cM'),
    ('sneaker store', 2, 'https://source.unsplash.com/o1QdvWV9okI'),
    ('jewelry stores', 2, 'https://source.unsplash.com/f5Y_m2bD_Tw'),
    ('party stores', 2, 'https://source.unsplash.com/0yTVA0TIq5o'),
    ('baby stores', 2, 'https://source.unsplash.com/p0hDztR46cw'),

    -- Services subcategories
    ('nail salon', 3, 'https://source.unsplash.com/Xa8fX8bQCgs'),
    ('barbershop', 3, 'https://source.unsplash.com/m8UvH75I2lI'),
    ('women hair salon', 3, 'https://source.unsplash.com/PtOfbGkU3uI'),
    ('laundromat', 3, 'https://source.unsplash.com/o7SvheEZoks'),
    ('pharmacy', 3, 'https://source.unsplash.com/747NDboAWNY'),
    ('dentist', 3, 'https://source.unsplash.com/kdoaOFGE9QM'),
    ('electronic stores', 3, 'https://source.unsplash.com/yFnX8DaC3UM'),
    ('hardware stores', 3, 'https://source.unsplash.com/t5YUoHW6zRo'),
    ('eyewear', 3, 'https://source.unsplash.com/UsALNdok2m4'),
    ('dry cleaners', 3, 'https://source.unsplash.com/YbGMa1Jz1yY'),
    ('bank', 3, 'https://source.unsplash.com/fJTqyZMOh18'),
    ('phone companies', 3, 'https://source.unsplash.com/1giBTF3G4EE'),
    ('tattoo/piercing', 3, 'https://source.unsplash.com/zOyOWsANHXo'),
    ('gym', 3, 'https://source.unsplash.com/WvDYdXDzkhs'),
    ('repair shops (bike etc.)', 3, 'https://source.unsplash.com/CcQWTRseDow'),
    ('internet-cafe', 3,'https://source.unsplash.com/6o4uc16IkDs'),

    -- Nightlife subcategories
    ('lounge', 4, 'http://source.unsplash.com/ak-PMKPQEAc'),
    ('bars', 4,'https://source.unsplash.com/VZY6o3Q0EEI'),
    ('clubs', 4,'https://source.unsplash.com/MU5ld71rDcs'),
    ('eyebrow thread', 4,'https://source.unsplash.com/cowLgyb63c4'),
    ('party stores', 4,'https://source.unsplash.com/0yTVA0TIq5o'),
    ('sport bar', 4,'https://source.unsplash.com/NGb5i1-M1hw')
 ;

--businesses
INSERT INTO stores (name, phone, address, description)
 VALUES 
  ( 'Tacos Al Suadero', ' (718) 506-1025', '8812 Roosevelt Ave', 'The interior of the place is as festive as other similarly themed restaurants. There are ornaments, ribbons, and all sorts of colorful articles from wall to wall and across the ceiling. Seating is just enough for a few groups, but even then there isn''t much room for dining here. As Spanish songs play in the background, its easy to feel like one is no longer in Queens.'),
( 'King River', ' (718) 506-1025', '8812 Roosevelt Ave', 'The interior of the place is as festive as other similarly themed restaurants. There are ornaments, ribbons, and all sorts of colorful articles from wall to wall and across the ceiling. Seating is just enough for a few groups, but even then there isnt much room for dining here. As Spanish songs play in the background, its easy to feel like one is no longer in Queens.')
;

INSERT INTO objects (store_id, type, url)
  VALUES
    (1, 'photo', 'https://s3-media3.fl.yelpcdn.com/bphoto/VWIaD4Y2_-2xnKFZbisH7A/o.jpg'), 
    (1, 'photo', 'https://s3-media4.fl.yelpcdn.com/bphoto/RryLfgiE7EV6k2AsfViT5A/o.jpg'),
    (1, 'photo', 'https://s3-media1.fl.yelpcdn.com/bphoto/DW1LaN66hAym4Oh-Ax_isw/o.jpg'),
    (2, 'photo', 'https://geo0.ggpht.com/cbk?photoid=3cfe_dFaDw0AAAQfCU_UkA&output=photo'),
    (2, 'photo', 'https://s3-media0.fl.yelpcdn.com/bphoto/UAGGIGEDepJhCFRsGAUNSw/o.jpg')
;

INSERT INTO stores_schedules (store_id, day, open_time, close_time)
  VALUES
    ('1', 'mon', '10:00 AM', '06:00 AM'),
    ('1', 'tue', '10:00 AM', '06:00 AM'),
    ('1', 'wed', '10:00 AM', '06:00 AM'),
    ('1', 'thu', '10:00 AM', '06:00 AM'),
    ('1', 'fri', '10:00 AM', '06:00 AM'),
    ('1', 'sat', '10:00 AM', '06:00 AM'),
    ('1', 'sun', '10:00 AM', '06:00 AM'),

    ('2', 'mon', '11:00 AM', '11:00 PM'),
    ('2', 'tue', '11:00 AM', '11:00 PM'),
    ('2', 'wed', '11:00 AM', '11:00 PM'),
    ('2', 'thu', '11:00 AM', '11:00 PM'),
    ('2', 'fri', '11:00 AM', '12:00 AM'),
    ('2', 'sat', '11:00 AM', '12:00 AM'),
    ('2', 'sun', '11:00 AM', '11:00 PM')
;

INSERT INTO stores_categories (store_id, category_id)
  VALUES
    (1, 1),
    (1, 26),
    (2, 1),
    (2, 16)
;
