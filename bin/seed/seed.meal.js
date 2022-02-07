// create a test data set of valid users
require('dotenv').config();
require('../../config/dbConfig'); // fetch the db connection

const MealModel = require('../../models/Meal.model'); // fetch the model to validate our user document before insertion (in database)
const MealTypeModel = require('./../../models/MealType.model');
const FoodModel = require('./../../models/Food.model');
const UserModel = require('./../../models/User.model');

const meals = [
  // week from Monday 24 January 2022 to Sunday 30 January 2022
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-01-24'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-01-24'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-01-30'),
  },
  // week from Monday 31 January 2022 to Sunday 6 February 2022
  {
    baseType: 'Pour les lève-tôt',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-01-31'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-01-31'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-01'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-01'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-02'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-02'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-03'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-03'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-04'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-04'),
  },
  {
    baseType: 'Goûter',
    baseFoods: ['Thiakry'],
    user: null,
    date: new Date('2022-02-05'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-05'),
  },
  {
    baseType: 'Petit déjeuner',
    baseFoods: ['Bissap', 'Tartine'],
    user: null,
    date: new Date('2022-02-06'),
  },
  // week from Monday 7 February 2022 to Sunday 13 February 2022
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-07'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-07'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-08'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-08'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-09'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-09'),
  },
  {
    baseType: 'Gortozenn',
    baseFoods: ['Tartine', 'Camembert'],
    user: null,
    date: new Date('2022-02-10'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-10'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-10'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-11'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-11'),
  },
  {
    baseType: 'Goûter',
    baseFoods: ['Thiakry'],
    user: null,
    date: new Date('2022-02-12'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-12'),
  },
  {
    baseType: 'Petit déjeuner',
    baseFoods: ['Bissap', 'Tartine'],
    user: null,
    date: new Date('2022-02-13'),
  },
  // week from Monday 14 February 2022 to Sunday 20 February 2022
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-14'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-14'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-15'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-15'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes'],
    user: null,
    date: new Date('2022-02-16'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-16'),
  },
  {
    baseType: 'Gortozenn',
    baseFoods: ['Tartine', 'Bissap'],
    user: null,
    date: new Date('2022-02-17'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pizza', 'Camembert'],
    user: null,
    date: new Date('2022-02-17'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Pizza'],
    user: null,
    date: new Date('2022-02-17'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-18'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-18'),
  },
  {
    baseType: 'Goûter',
    baseFoods: ['Thiakry'],
    user: null,
    date: new Date('2022-02-19'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-19'),
  },
  {
    baseType: 'Dîner tardif',
    baseFoods: ['Pâtes', 'Tartine', 'Thiakry'],
    user: null,
    date: new Date('2022-02-20'),
  },
  // week from Monday 21 February 2022 to Sunday 27 February 2022
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-21'),
  },
  {
    baseType: 'Dîner',
    baseFoods: ['Carottes râpées', 'Saumon bio'],
    user: null,
    date: new Date('2022-02-21'),
  },
  {
    baseType: 'Déjeuner',
    baseFoods: ['Pâtes', 'Camembert'],
    user: null,
    date: new Date('2022-02-22'),
  },
];

(async function insertTestMeals() {
  try {
    // empty the meals db collection
    await MealModel.deleteMany();

    // get referenced collections from db
    const user = await UserModel.findOne({ name: 'lami' });
    const mealtypes = await MealTypeModel.find();
    const foods = await FoodModel.find();

    meals.forEach((meal) => {
      console.log('meal.baseType, meal.date', meal.baseType, meal.date);
      // update the meal with the mealtype id from db
      const foundType = mealtypes.find(
        (mealtype) => mealtype.name === meal.baseType
      );
      if (foundType) meal.type = foundType._id;
      console.log('meal.baseType, meal.type', meal.baseType, meal.type);
      delete meal.baseType;

      // update the meal with the food id from db
      meal.baseFoods.forEach((baseFood) => {
        const foundFood = foods.find((food) => food.name === baseFood);
        if (foundFood) {
          Array.isArray(meal.foods)
            ? meal.foods.push(foundFood._id)
            : (meal.foods = [foundFood._id]);
        }
      });
      console.log('meal.baseFoods, meal.foods', meal.baseFoods, meal.foods);
      delete meal.baseFoods;

      // update the meal with the user id from db
      meal.user = user._id;
    });

    // insert docs in db
    const inserted = await MealModel.insertMany(meals);
    console.log(`seed meals done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
