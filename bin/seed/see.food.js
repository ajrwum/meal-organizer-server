const Food = require('../../models/Food.model');

require('dotenv').config();
require('./../../config/dbConfig');

const foods = [
    {
        name: 'Bissap',
        category: '',
        description: 'Boisson issue de la fleur d\'hibiscus quin se boit chaud ou froid.',
        user: '',
    },
    {
        name: 'Tartine',
        category: '',
        description: 'really n**** !?',
        user: '',
    },
    {
        name: 'Pâtes',
        category: '',
        description: 'Spaghetti, Tortellini, Macaroni, on connait la chanson !',
        user: '',
    },
    {
        name: 'Camembert',
        category: '',
        description: 'Fromage au lait cru de vache, à pâte molle légèrement salée et à la croute fleurie dont le lait cru est produit et transformé en Normandie.',
        user: '',
    },
    {
        name: 'Thiakry',
        category: '',
        description: 'Dessert à base de couscous de mil et de yaourt',
        user: '',
    }
];

(async function insertFoods() {
    try {
        await Food.deleteMany();
        const inserted = await Food.insertMany(foods);
        console.log(`Food seed done: ${inserted.length} documents inserted!`);
        process.exit();
    } catch (error) {
        console.error(error);
    }
})();