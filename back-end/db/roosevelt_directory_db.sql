CREATE TYPE "dow" AS ENUM (
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
  'sun'
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "image_url" VARCHAR,
  "parent_category_id" INT
);

CREATE TABLE "stores_categories" (
  "id" SERIAL PRIMARY KEY,
  "store_id" INT,
  "category_id" INT
);

CREATE TABLE "objects" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "type" VARCHAR,
  "store_id" INT
);

CREATE TABLE "stores_schedules" (
  "id" SERIAL PRIMARY KEY,
  "day" dow,
  "open_time" VARCHAR(8),
  "close_time" VARCHAR(8),
  "store_id" INT
);

CREATE TABLE "stores" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "phone" VARCHAR,
  "address" VARCHAR,
  "description" VARCHAR
);

ALTER TABLE "categories" ADD FOREIGN KEY ("parent_category_id") REFERENCES "categories" ("id");

ALTER TABLE "stores_categories" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("id");

ALTER TABLE "stores_categories" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "objects" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("id");

ALTER TABLE "stores_schedules" ADD FOREIGN KEY ("store_id") REFERENCES "stores" ("id");
