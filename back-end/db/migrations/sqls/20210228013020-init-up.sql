CREATE TYPE "dow" AS ENUM (
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
  'sun'
);

CREATE TYPE "object_type" AS ENUM (
  'main_photo',
  'photo',
  'document',
  'other'
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "image_url" VARCHAR,
  "description" VARCHAR,
  "parent_category_id" INT
);

CREATE TABLE "business_categories" (
  "id" SERIAL PRIMARY KEY,
  "business_id" INT,
  "category_id" INT
);

CREATE TABLE "objects" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "type" object_type,
  "business_id" INT
);

CREATE TABLE "business_schedules" (
  "id" SERIAL PRIMARY KEY,
  "day" dow,
  "open_time" VARCHAR(8),
  "close_time" VARCHAR(8),
  "business_id" INT
);

CREATE TABLE "businesses" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "name_slug" VARCHAR NOT NULL,
  "name_searchable" tsvector GENERATED ALWAYS AS (to_tsvector('english', "businesses"."name")) STORED,
  "phone" VARCHAR,
  "address_1" VARCHAR,
  "address_2" VARCHAR,
  "description" VARCHAR,
  "thumb_img" VARCHAR,
  "keywords" VARCHAR,
  "keywords_searchable" tsvector GENERATED ALWAYS AS (to_tsvector('english', "businesses"."keywords")) STORED,
  "active" BOOLEAN,
  "status" VARCHAR
);

CREATE INDEX "businesses_keywords_searchable_idx" ON "businesses" USING GIN ("keywords_searchable");
CREATE INDEX "businesses_name_searchable_idx" ON "businesses" USING GIN ("name_searchable");
CREATE INDEX "businesses_name_slug_idx" ON "businesses" USING HASH ("name_slug");

ALTER TABLE "categories" ADD FOREIGN KEY ("parent_category_id") REFERENCES "categories" ("id");

ALTER TABLE "business_categories" ADD FOREIGN KEY ("business_id") REFERENCES "businesses" ("id");

ALTER TABLE "business_categories" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "objects" ADD FOREIGN KEY ("business_id") REFERENCES "businesses" ("id");

ALTER TABLE "business_schedules" ADD FOREIGN KEY ("business_id") REFERENCES "businesses" ("id");
    
INSERT INTO categories (name, parent_category_id, image_url, description)
  VALUES 
    -- Main categories
    ('food', NULL, 'https://image.ibb.co/n8qvZS/food.png', 'Jackson Heights has the best food to offer from amazing cuisines from all over the world'),
    ('stores', Null, 'https://image.ibb.co/iafEeS/stores.png', 'Stores in Jackson Heights have anything you may need, from beauty products to construction materials'),
    ('services', NULL, 'https://image.ibb.co/jW8BR7/services.png', 'Jackson Heights offers world class services delivered by the lovelies people'),
    ('nightlife', NULL, 'https://image.ibb.co/iEJ0KS/nightlife.png', 'The vibrant nightlife of Jackson Heights makes it the perfect place to have fun and enjoy the drinks and food'),
    ('street vendor', NULL, 'https://images.unsplash.com/photo-1536067147722-33692458deb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=bundo-kim-s1YItIZpQ2c-unsplash.jpg&w=640', 'Low-cost, quick, eye-catching and delicious! Jackson Heights street vendors are like no others.')
;

INSERT INTO categories (name, parent_category_id, image_url)
  VALUES 
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
    ('electronics stores', 3, 'https://source.unsplash.com/yFnX8DaC3UM'),
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
