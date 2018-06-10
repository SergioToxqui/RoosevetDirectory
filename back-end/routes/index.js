var express = require("express");
var router = express.Router();
var db = require('../db/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/:category", db.getSubcategories);

router.get("/:category/:subcategory", db.getStoresBySubcategory);

router.get("/:category/:subcategory/:storeName", db.getStoreByName);

module.exports = router;



