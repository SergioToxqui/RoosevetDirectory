const { db } = require('./pgp')

const add = async (business) => {
  try {
    const SQL = `
      INSERT INTO businesses (name, name_slug, phone, address_1, address_2, description, keywords, active, status)
        VALUES($/name/, $/name_slug/, $/phone/, $/address_1/, $/address_2/, $/description/, $/keywords/, $/active/, $/status/) 
        RETURNING *
    `
    const data = await db.one(SQL, business)
    return data
  } catch (err) {
    throw err
  }
}

const search = async (keywordsString) => {
  try {
    const SQL = `
      SELECT
        businesses.id, name, name_slug, phone, address_1, 
        address_2, description, active, status,
        objects.url AS img_url       
      FROM businesses 
      JOIN objects on objects.business_id = businesses.id
      WHERE keywords_searchable @@ websearch_to_tsquery($1)
      AND active = TRUE
      AND type = 'main_photo'
    `
    const data = await db.any(SQL, keywordsString)
    return data
  } catch (err) {
    throw err
  }
}


module.exports = {
  add,
  search
}
