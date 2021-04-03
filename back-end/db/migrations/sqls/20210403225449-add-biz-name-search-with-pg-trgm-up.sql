/* 
  Use the pg_trgm extension to optimize business search by name pattern matching with LIKE
  Create index GiST for business name pattern search using name_slug which will have non alpha
  numeric characters removed
*/

CREATE EXTENSION pg_trgm;

CREATE INDEX "businesses_name_slug_trgm_idx" on "businesses" USING GIN ("name_slug" gin_trgm_ops);
