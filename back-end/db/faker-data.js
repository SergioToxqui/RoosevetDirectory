require('dotenv').config() // Load DATABASE_URL to ENV
const faker = require('faker')
const slugify = require('slugify')
const { db, pgpAs } = require('./pgp')

let SQL = `
  INSERT INTO businesses 
    (name, name_slug, phone, address_1, address_2, description, thumb_img, keywords, active, status)
    VALUES 
`
let rows = []
let ROWS_COUNT = 1000;

for (let i = 1; i <= ROWS_COUNT; i++) {
  let business = {
    name: faker.company.companyName(),
    phone: faker.phone.phoneNumber('(!##) !##-####'),
    address_1: `${faker.address.streetAddress()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`,
    address_2: faker.address.secondaryAddress(),
    description: faker.company.catchPhrase(),
    thumb_img: faker.image.imageUrl(),
    active: true, //faker.datatype.boolean(),
    status: 'PENDING APPROVAL'
  }
  business.name_slug = slugify(business.name.toLowerCase(), { remove: /[*+~.,()'"!:@]/g })
  business.keywords = business.description.toLowerCase()

  let row = pgpAs.format(`($/name/, $/name_slug/, $/phone/, $/address_1/, $/address_2/, $/description/, $/thumb_img/, $/keywords/, $/active/, $/status/)`, business)
  rows.push(row)
}

SQL += rows.join(',\n')

db.any(SQL)
  .then(() => {
    console.log('Success')
    process.exit(0)
  })
  .catch((err) => {
    console.error('There was an error', err)
  })


