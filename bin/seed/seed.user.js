// create a test data set of valid users
require('dotenv').config();
require('../../config/dbConfig'); // fetch the db connection
const UserModel = require('../../models/User.model'); // fetch the model to validate our user document before insertion (in database)

const users = [
  {
    name: 'lami',
    email: 'lami@mo.com',
    password: '1234',
  },
];

(async function insertTestUsers() {
  try {
    // empty the users db collection
    await UserModel.deleteMany();
    // insert docs in db
    const inserted = await UserModel.insertMany(users);
    console.log(`seed users done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
