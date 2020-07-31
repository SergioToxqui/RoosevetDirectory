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






