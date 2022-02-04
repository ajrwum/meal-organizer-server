// create a test data set of valid users
require('dotenv').config();
require('./../../config/dbConfig'); // fetch the db connection
const CategoryModel = require('./../../models/Category.model'); // fetch the model to validate our user document before insertion (in database)

const categories = [
  {
    name: 'Boisson',
    order: 10,
    color: 'crimson',
  },
  {
    name: 'Ptidéj',
    order: 20,
    color: 'orange',
  },
  {
    name: 'Entrée',
    order: 30,
    color: 'lightyellow',
  },
  {
    name: 'Plat',
    order: 40,
    color: 'hotpink',
  },
  {
    name: 'Accompagnement',
    order: 50,
    color: 'lightgreen',
  },
  {
    name: 'Fromage',
    order: 60,
    color: 'lightblue',
  },
  {
    name: 'Dessert',
    order: 70,
    color: 'darkorchid',
  },
];

(async function insertTestCategories() {
  try {
    // empty the categories db collection
    await CategoryModel.deleteMany();
    // insert docs in db
    const inserted = await CategoryModel.insertMany(categories);
    console.log(
      `seed categories done : ${inserted.length} documents inserted !`
    );
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
