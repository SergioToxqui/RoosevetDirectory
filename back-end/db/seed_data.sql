--businesses
INSERT INTO businesses (name, name_slug, phone, address_1, address_2, description, keywords, active, status)
VALUES 
  ( 'Tacos Al Suadero', 'tacos-al-suadero', '(718) 506-1025', '8812 Roosevelt Ave', NULL, 'The interior of the place is as festive as other similarly themed restaurants. There are ornaments, ribbons, and all sorts of colorful articles from wall to wall and across the ceiling. Seating is just enough for a few groups, but even then there isn''t much room for dining here. As Spanish songs play in the background, its easy to feel like one is no longer in Queens.', 'tacos mexican food tostadas quesadilla', TRUE, 'OPERATING'),
  ( 'King River', 'king-river', '(718) 506-1025', '8812 Roosevelt Ave', NULL, 'The interior of the place is as festive as other similarly themed restaurants. There are ornaments, ribbons, and all sorts of colorful articles from wall to wall and across the ceiling. Seating is just enough for a few groups, but even then there isnt much room for dining here. As Spanish songs play in the background, its easy to feel like one is no longer in Queens.', 'chinese chicken ramen soup', FALSE, 'PENDING APPROVAL' ),
  ( 'Sammy''s Halal Food', 'sammys-halal-food', '(718) 775-8369', '73rd St And, Broadway, NY 11372', 'STREET', 'Sammy''s halal is hands down probably the best lamb over rice you can find out there now. ', 'halal chicken over rice falafel gyro lamb', TRUE, 'OPERATING' ) 
  ;

INSERT INTO objects (business_id, type, url)
  VALUES
    (1, 'photo', 'https://s3-media3.fl.yelpcdn.com/bphoto/VWIaD4Y2_-2xnKFZbisH7A/o.jpg'), 
    (1, 'photo', 'https://s3-media4.fl.yelpcdn.com/bphoto/RryLfgiE7EV6k2AsfViT5A/o.jpg'),
    (1, 'photo', 'https://s3-media1.fl.yelpcdn.com/bphoto/DW1LaN66hAym4Oh-Ax_isw/o.jpg'),
    (2, 'photo', 'https://geo0.ggpht.com/cbk?photoid=3cfe_dFaDw0AAAQfCU_UkA&output=photo'),
    (2, 'photo', 'https://s3-media0.fl.yelpcdn.com/bphoto/UAGGIGEDepJhCFRsGAUNSw/o.jpg'),
    (3, 'photo', 'https://s3-media0.fl.yelpcdn.com/bphoto/O-aMOt_uboQBWaVj3lwUdA/o.jpg'),
    (3, 'photo', 'https://s3-media0.fl.yelpcdn.com/bphoto/HkvaGYQP0roL9TUWz_qx4Q/o.jpg'),
    (3, 'photo', 'https://s3-media0.fl.yelpcdn.com/bphoto/leLUF5nJY2h0L2-9pA0VRA/o.jpg')
;

INSERT INTO business_schedules (business_id, day, open_time, close_time)
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
    ('2', 'sun', '11:00 AM', '11:00 PM'),

    ('3', 'mon', '12:00 AM', '11:59 PM'),
    ('3', 'tue', '12:00 AM', '11:59 PM'),
    ('3', 'wed', '12:00 AM', '11:59 PM'),
    ('3', 'thu', '12:00 AM', '11:59 PM'),
    ('3', 'fri', '12:00 AM', '12:59 AM'),
    ('3', 'sat', '12:00 AM', '12:59 AM'),
    ('3', 'sun', '12:00 AM', '11:59 PM')
;

INSERT INTO business_categories (business_id, category_id)
  VALUES
    (1, 1),
    (1, 26),
    (2, 1),
    (2, 16)
;
