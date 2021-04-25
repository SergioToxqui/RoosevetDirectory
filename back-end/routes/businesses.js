const slugify = require('slugify')
const businessesRouter = require('express').Router()
const Businesses = require('../db/Businesses')

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

businessesRouter.get("/:slug", async (req, res, next) => {
  try {
    const { slug } = req.params
    const business = await Businesses.getBySlug(slug)
    if (!business) {
      return res.status(404).json({
        error: true,
        payload: null,
        message: `Business ${slug} not found`
      })
    }
    res.json({
      error: null,
      payload: { business },
      message: 'Retrieved business by slug'
    })
  } catch (err) {
    return next(err)
  }
})


module.exports = businessesRouter;
