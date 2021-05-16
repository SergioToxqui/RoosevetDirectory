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

const searchByKeywords = async (keywordsString) => {
  try {
    const SQL = `
      SELECT
        businesses.id, name, name_slug, phone, address_1,
        address_2, description, active, status, thumb_img
      FROM businesses 
      WHERE keywords_searchable @@ websearch_to_tsquery($1)
      AND active = TRUE
    `
    const data = await db.any(SQL, keywordsString)
    return data
  } catch (err) {
    throw err
  }
}

const searchByName = async (name) => {
  try {
    const SQL = `
      SELECT
        businesses.id, name, name_slug, phone, address_1,
        address_2, description, active, status, thumb_img
      FROM businesses
      WHERE name_searchable @@ plainto_tsquery($1)
      AND active = TRUE
    `
    const data = await db.any(SQL, name)
    return data
  } catch (err) {
    throw err
  }
}

const getBySlug = async (slug) => {
  try {
    const SQL = `
      SELECT
        businesses.id, name, name_slug, phone, address_1,
        address_2, description, active, status, thumb_img,
        json_agg(json_build_object('url', objects.url, 'type', objects.type)) as objects
      FROM businesses
      JOIN objects on businesses.id = objects.business_id
      WHERE name_slug = $1 AND objects.type::text LIKE '%photo'
      AND active = TRUE
      GROUP BY businesses.id
    `
    const data = await db.oneOrNone(SQL, slug)
    return data
  } catch (err) {
    throw err
  }
}

module.exports = {
  add,
  searchByKeywords,
  searchByName,
  getBySlug
}
