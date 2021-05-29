const Businesses = require('../db/Businesses')
const getBySlug = async (req, res, next) => {
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
    req.locals = { business }
    return next()
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  getBySlug
}
