const Food = require('../../models/Food.model');
const Category = require('../../models/Category.model');
const User = require('../../models/User.model');

require('dotenv').config();
require('../../config/dbConfig');

const foods = [
  {
    name: 'Bissap',
    baseCategory: 'Boisson',
    description:
      "Boisson issue de la fleur d'hibiscus qui se boit chaude ou froide.",
    user: null,
  },
  {
    name: 'Tartine',
    baseCategory: 'Ptidéj',
    description: 'really n**** !?',
    user: null,
  },
  {
    name: 'Carottes râpées',
    baseCategory: 'Entrée',
    description:
      "Quelques carottes bio râpées et assaisonnées d'une bonne vinaigrette.",
    user: null,
  },
  {
    name: 'Saumon bio',
    baseCategory: 'Plat',
    description:
      'Saumon préparé soit en sashimi soit en brochettes yakitori marinées dans un peu de sauce mitarashi.',
    user: null,
  },
  {
    name: 'Pizza',
    baseCategory: 'Plat',
    description:
      'Une bonne pâte faite maison recouverte de sauce tomate, de poivrons, de champignons, de jambon et agrémentée de mozzarella et de parmesan.',
    user: null,
  },
  {
    name: 'Pâtes',
    baseCategory: 'Accompagnement',
    description: 'Spaghetti, Tortellini, Macaroni, on connaît la chanson !',
    user: null,
  },
  {
    name: 'Camembert',
    baseCategory: 'Fromage',
    description:
      'Fromage au lait cru de vache, à pâte molle légèrement salée et à la croûte fleurie dont le lait cru est produit et transformé en Normandie.',
    user: null,
  },
  {
    name: 'Thiakry',
    baseCategory: 'Dessert',
    description: 'Dessert à base de couscous de mil et de yaourt',
    user: null,
  },
];

(async function insertFoods() {
  try {
    await Food.deleteMany();

    const user = await User.findOne({ name: 'lami' });
    // console.log('user', user);

    const categories = await Category.find();
    // console.log('categories', categories);

    foods.forEach((food) => {
      const found = categories.find((cat) => cat.name === food.baseCategory);
      if (found) food.category = found._id;
      food.user = user._id;
      delete food.baseCategory;
    });
    // console.log('foods - finalized before db insertion', foods);

    const inserted = await Food.insertMany(foods);
    console.log(`Food seed done: ${inserted.length} documents inserted!`);
    process.exit();
  } catch (error) {
    console.error(error);
  }
})();
