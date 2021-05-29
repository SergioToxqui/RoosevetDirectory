const slugify = require('slugify')
const businessesRouter = require('express').Router()
const Businesses = require('../db/Businesses')
const BusinessesMiddleware = require('../middleware/businesses')

businessesRouter.post("/", async (req, res, next) => {
  const businessInfo = {
    ...req.body,
    "name_slug": slugify(req.body.name.toLowerCase(), { remove: /[*+~.,()'"!:@]/g }),
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

businessesRouter.get("/", async (req, res, next) => {
  try {
    let keywordsString = req.query.q
    const [resultsByKeywords, resultsByName] = await Promise.all([
      Businesses.searchByKeywords(keywordsString),
      Businesses.searchByName(keywordsString),
    ])
    let count = resultsByKeywords.length + resultsByName.length
    let messageHeader = count ? count : "No"
    res.json({
      error: null,
      payload: {
        resultsByKeywords,
        resultsByName
      },
      count: count,
      message: `${messageHeader} businesses found`
    })
  } catch (err) {
    return next(err)
  }
})

businessesRouter.get("/:slug", BusinessesMiddleware.getBySlug, (req, res, next) => {
  const { business } = req.locals
  res.json({
    error: null,
    payload: { business },
    message: 'Retrieved business by slug'
  })
})

businessesRouter.get("/:slug/schedule", BusinessesMiddleware.getBySlug, async (req, res, next) => {
  try {
    const { business } = req.locals
    const schedule = await Businesses.getSchedule(business.id)
    res.json({
      error: false,
      payload: schedule,
      message: `Business schedule retrieved`
    })
  } catch (err) {
    return next(err)
  }
})

module.exports = businessesRouter;
