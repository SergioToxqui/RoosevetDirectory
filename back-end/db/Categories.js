const { db } = require('./pgp')

const get = async (name) => {
  try {
    const data = await db.one("SELECT * FROM categories WHERE name = $1", name)
    return data
  } catch (err) {
    throw err
  }
}

module.exports = {
  get,
}
