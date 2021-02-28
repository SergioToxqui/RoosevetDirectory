# RooseveltDirectory
A centralized location for information on local businesses, resources and activities on Roosevelt Avenue(in Jackson Heights).
The app aims to connect new community members to established local mom and pop stores.  

Roosevelt Directory was built using HTML, CSS, javascript, Express, React and Axios. It also uses Google Maps Embed.

![Roosevelt Directory Home Page](./docs/assets/rd-landing.png)

## Features
* Search stores by name

## Features under construction
* Access stores by category and subcategories
* Form for new stores to sign-up to be part of the Roosevelt Directory
* Admin dashboard with controls to approve new stores sign up
* Stores photos upload
* The home page show cases a new store every week with a blurb of the store(store story)

## Backend Endpoints & Functionality

| Method | Endpoint           | Params                            | Description                                     |
| ------ | ------------------ | --------------------------------- | ----------------------------------------------- |
| `GET`  | `/search`          | `category`, `subcategory`, `name` | Search stores by category, subcategory and name |
| `GET`  | `/biz/:store_name` | N/A                               | Retrieve store details by store name            |

## DB Resources Operations & access patterns

### Stores
1. Get single store by slug or id
```
GET /api/stores/:id
GET /api/stores/:slugified-name # Will need to be an index.
```
2. Search stores by keywords or name
```
GET /api/stores?q=<keywords>
GET /api/stores/search?q=<keywords>
```

* Get stores by category or subcategory
```
GET /api/stores?categories[]=<cat1>&categories[]=<cat2>
GET /api/stores/category/:category
```
* Add a store
```
POST /api/stores
```
* Update a store category. Category as a subresource of a store?
```
PUT /api/stores/:id/categories/:category
DELETE /api/stores/:id/categories/:category
```
* Add a store schedule. Schedule as a subresource of a store
```
PUT /api/stores/:id/schedule/:dow
```
* Adding an object for a store, like uploading or removing images. Objects as subresource of stores?
```
PUT /api/stores/:id/objects/:type
```

## Categories
* Get all main categories
```
GET /api/categories
```
* Get all subcategories from main category
```
GET /api/categories/:category/subcategories
```
* Get stores by categories? With stores as subresource of categories.
This makes sense because a category could be seen as a collection of stores
```
GET /api/categories/:category/stores
```



