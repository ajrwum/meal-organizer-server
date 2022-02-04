// create a test data set of valid users
require('dotenv').config();
require('../../config/dbConfig'); // fetch the db connection

const MealTypeModel = require('../../models/MealType.model'); // fetch the model to validate our user document before insertion (in database)

const mealTypes = [
  {
    name: 'Encas',
    timeslot: 'À toute heure',
    position: 50,
  },
  {
    name: 'Vers minuit',
    timeslot: 'Minuit - 03:00',
    position: 100,
  },
  {
    name: 'Pour les lève-tôt',
    timeslot: '03:00 - 06:00',
    position: 200,
  },
  {
    name: 'Sahor',
    timeslot: 'Avant le lever du soleil',
    position: 250,
  },
  {
    name: 'Petit déjeuner',
    timeslot: '06:00 - 09:00',
    position: 300,
  },
  {
    name: 'Gortozenn',
    timeslot: '09:00 - Midi',
    position: 300,
  },
  {
    name: 'Brunch',
    timeslot: '11:00 - 15:00',
    position: 400,
  },
  {
    name: 'Déjeuner',
    timeslot: 'Midi - 14:00',
    position: 500,
  },
  {
    name: 'Goûter',
    timeslot: '15:00 - 18:00',
    position: 600,
  },
  {
    name: 'Ftour',
    timeslot: 'Après le coucher du soleil',
    position: 700,
  },
  {
    name: 'Dîner',
    timeslot: '18:00 - 22:00',
    position: 800,
  },
  {
    name: 'Dîner tardif',
    timeslot: '21:00 - Minuit',
    position: 900,
  },
];

(async function insertTestMealTypes() {
  try {
    // empty the mealTypes db collection
    await MealTypeModel.deleteMany();
    // insert docs in db
    const inserted = await MealTypeModel.insertMany(mealTypes);
    console.log(
      `seed mealTypes done : ${inserted.length} documents inserted !`
    );
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
