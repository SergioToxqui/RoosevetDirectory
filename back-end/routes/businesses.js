const slugify = require('slugify')
const businessesRouter = require('express').Router()
const Businesses = require('../db/Businesses')

businessesRouter.post("/", async (req, res, next) => {
  const businessInfo = {
    ...req.body,
    "name_slug": slugify(req.body.name.toLowerCase(), { remove: /[*+~.()'"!:@]/g }),
    "active": false,
    "status": "PENDING APPROVAL",
  }

  try {
    let business = await Businesses.add(businessInfo)
    res.json({
      error: null,
      payload: business,
      message: 'A new business was added'
    })
  } catch (err) {
    return next(err)
  }
})

module.exports = businessesRouter;
