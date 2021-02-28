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
