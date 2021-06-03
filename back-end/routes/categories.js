const categoriesRouter = require('express').Router()
const { errors } = require('../db/pgp');
const Categories = require('../db/Categories')

categoriesRouter.get("/:name", async (req, res, next) => {
  const { name } = req.params
  try {
    const category = await Categories.get(name)
    res.json({
      error: null,
      payload: { category },
      message: `Category '${name}' info retrieved`
    })
  } catch (err) {
    if (errors.recordNotFound(err)) {
      return res.status(404).json({
        error: true,
        payload: null,
        message: `Category '${name}' not found`
      })
    }
    return next(err)
  }
})

module.exports = categoriesRouter;
