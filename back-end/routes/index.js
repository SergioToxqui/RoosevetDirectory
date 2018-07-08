var express = require("express");
var router = express.Router();
var db = require('../db/queries')

router.get("/search/:searchName", db.searchName);

router.get("/:category", db.getSubcategories);

router.get("/:category/:subcategory", db.getStoresBySubcategory);

router.get("/:category/:subcategory/:storeName", db.getStoreByName);

router.get("/search/:searchName", db.searchName);

module.exports = router;



