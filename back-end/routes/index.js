var express = require("express");
var router = express.Router();
var db = require('../db/queries')

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/subcategory/:categoryID", db.getSubcategories);
//           

router.get("/store/:subcategoryID", db.getAllStores);

//router.post("/teachers/subject", db.getAllSubToCat);

//router.post("/teachers/name", db.getAllStoreToSub);

module.exports = router;



