var pgp = require('pg-promise')({});
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

const recordNotFound = (err) => {
  return err instanceof pgp.errors.QueryResultError && err.code === pgp.errors.queryResultErrorCode.noData
}

module.exports = {
  db,
  pgpAs: pgp.as,
  errors: {
    recordNotFound
  }
}
