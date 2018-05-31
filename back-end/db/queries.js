var pgp = require('pg-promise')({});
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);


function getSubcategories(req, res, next) {
    db.any('SELECT * FROM subcategories WHERE categoriesID = $1', req.params.categoryID)
    .then((data) => {
        console.log("data:", data)
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved all categories'
        })
    })
    .catch((err) => {
        return next(err)
    })
}


function getAllFood(req, res, next) {
    console.log(req.params.subcategoryID)
    db.any('SELECT * FROM stores WHERE subcategoryID = $1', req.params.subcategoryID)
    .then((data) => {
        console.log("data:", data)
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved all subcategories'
        })
    })
    .catch((err) => {
        return next(err)
    })
}
function getAllStores(req, res, next) {
    console.log('getall stores is being called')
    db.any('SELECT * FROM stores WHERE subcategoryID = $1', req.params.subcategoryID)
    .then((data) => {
        console.log("data:", data)
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved all stores'
        })
    })
    .catch((err) => {console.log('there was an error', err)
        return next(err)
    })
}
function getAllSubToCat(req, res, next) {
    db.any('SELECT * FROM sub_to_categories')
    .then((data) => {
        console.log("data:", data)
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved all sub_to_categories'
        })
    })
    .catch((err) => {
        return next(err)
    })
}
function getAllStoreToSub(req, res, next) {
    db.any('SELECT * FROM stores_to_sub')
    .then((data) => {
        console.log("data:", data)
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved all teachers'
        })
    })
    .catch((err) => {
        return next(err)
    })
}

module.exports = {
    getAllStores,
    getAllSubToCat,
    getAllStoreToSub,
    getAllFood,
    getSubcategories
}
