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

module.exports = {
  add
}
