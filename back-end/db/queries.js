var pgp = require('pg-promise')({});
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);


function getSubcategories(req, res, next) {
    db.any('SELECT * FROM subcategories WHERE category_name = $1', req.params.category)
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


function getStoresBySubcategory(req, res, next) {
    console.log('get all stores is being called')
    db.any('SELECT * FROM stores WHERE subcategory_name = $1', req.params.subcategory)
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

function getStoreByName(req, res, next) {
    console.log('get store by name is being called')
    let query = `
        SELECT 
            stores.id,
            name,
            phone,
            address,
            description, 
            (SELECT ARRAY_AGG(json_build_object('day', day, 'open_time', open_time, 'close_time', close_time)) FROM stores_schedules WHERE stores_schedules.store_id = stores.id) AS schedule,
            (SELECT ARRAY_AGG(json_build_object('url', url, 'type', type)) FROM objects WHERE objects.store_id = stores.id) AS photos
        FROM stores 
        JOIN stores_schedules ON stores.id = stores_schedules.store_id
        WHERE name = $1
        GROUP BY(stores.id)
 `

    db.one(query, req.params.storeName)
    .then((data) => {
        console.log("data:", data)
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved store'
        })
    })
    .catch((err) => {console.log('there was an error', err)
        return next(err)
    })
}

function searchName(req, res, next) {
   const nameFix = `%${req.params.searchName.toLowerCase()}%`
    console.log('search for store by name is being called', nameFix)
    db.any('SELECT * FROM stores WHERE LOWER (name) LIKE $1 OR LOWER (type) LIKE $1', nameFix)
    .then((data) => {
        console.log("data:", data)
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved store'
        })
    })
    .catch((err) => {console.log('there was an error', err)
        return next(err)
    })
}


module.exports = {
    getSubcategories,
    getStoresBySubcategory,
    getStoreByName,
    searchName
}
