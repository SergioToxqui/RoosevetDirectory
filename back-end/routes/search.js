const search = require('express').Router()
const db = require('../db/queries')

search.get("/", async (req, res, next) => {
  const params = {
    ...req.query
  }

  try {
    let stores = await db.searchStores(params)
    res.json({
      status: 'success',
      data: stores,
      message: 'Searched Stores'
    })
  } catch (err) {
    return next(err)
  }
})

module.exports = search;
