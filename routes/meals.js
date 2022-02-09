const router = require('express').Router();

const {
  getDayFiltersFromMonToSun,
  getWeekFilterFromMonToSun,
  getWeekDates,
  datesAreOnSameDay,
} = require('./../utils/date.utils');

const MealTypeModel = require('./../models/MealType.model');
const MealModel = require('./../models/Meal.model');

/* ========================================================= */
/* *** All routes here are prefixed with:    '/meals'    *** */
/* ========================================================= */

router.get(
  '/mealtypes',
  /* isAuthenticated, */ async (req, res, next) => {
    console.log('req.user', req.user);
    console.log('--- GET - /meals/mealtypes --- req params:', req.params);

    try {
      const dbMealTypes = await MealTypeModel.find();
      res.status(200).json(dbMealTypes);
    } catch (error) {
      console.error('error', error);
      next(error);
    }
  }
);

router.post(
  '/meal',
  /* isAuthenticated, */ async (req, res, next) => {
    console.log('--- POST - /meals/meal --- req params:', req.params);

    try {
      const userId = req.user._id.toHexString();
      console.log('req.user', req.user);
      console.log('userId', userId);
      console.log('req.body', req.body);
      if (!req.body.type || !req.body.foods.length || !req.body.date) {
        throw new Error('Information(s) manquante(s)');
      }
      if (req.body.user && req.body.user !== userId) {
        throw new Error('Utilisateur non reconnu');
      }
      let newMeal;
      if (req.body.user) newMeal = { ...req.body };
      else newMeal = { ...req.body, user: userId };

      const createdMeal = await MealModel.create(newMeal);
      res.status(201).json(createdMeal);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

router.get(
  '/meal/:id',
  /* isAuthenticated, */ async (req, res, next) => {
    console.log('--- GET - /meals/meal/:id --- req params:', req.params);

    try {
      const foundMeal = await MealModel.findById(req.params.id)
        .populate('type')
        .populate({
          path: 'foods',
          populate: {
            path: 'category',
            model: 'Category',
          },
        })
        .populate('user');
      res.status(200).json(foundMeal);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

router.patch(
  '/meal/:id',
  /* isAuthenticated, */ async (req, res, next) => {
    console.log('--- PATCH - /meals/meal/:id --- req params:', req.params);

    try {
      const userId = req.user._id;
      if (!req.body.type || !req.body.foods.length || !req.body.date) {
        throw new Error('Information(s) manquante(s)');
      }
      if (req.body.user && req.body.user !== userId) {
        throw new Error('Utilisateur non reconnu');
      }
      let toUpdateMeal;
      if (req.body.user) toUpdateMeal = { ...req.body };
      else toUpdateMeal = { ...req.body, user: userId };

      const updatedMeal = await MealModel.findByIdAndUpdate(
        req.params.id,
        toUpdateMeal,
        { new: true }
      )
        .populate('type')
        .populate({
          path: 'foods',
          populate: {
            path: 'category',
            model: 'Category',
          },
        })
        .populate('user');
      res.status(200).json(updatedMeal);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

router.delete(
  '/meal/:id',
  /* isAuthenticated, */ async (req, res, next) => {
    console.log('--- DELETE - /meals/meal/:id --- req params:', req.params);
    try {
      const deletedMeal = await MealModel.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedMeal);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

router.get(
  '/:strDate',
  /* isAuthenticated, */ async (req, res, next) => {
    console.log('----------');
    console.log('----------');
    console.log('----------');
    console.log('----------');
    console.log('req.user', req.user);
    const userId = req.user._id.toHexString();
    console.log('--- GET - /meals/:strDate --- req params:', req.params);

    try {
      const weekDates = getWeekDates(req.params.strDate);
      console.log('weekDates', weekDates);
      const dayFilters = getDayFiltersFromMonToSun(req.params.strDate);

      // const dateFilter = getWeekFilterFromMonToSun(req.params.strDate);
      const dateFilter = dayFilters[0];
      // console.log('dateFilter', dateFilter);
      const mon = new Date('2022-02-04');

      const allMeals = await MealModel.find();

      const dbMealsQuentin = allMeals.filter((meal) => {
        return datesAreOnSameDay(mon, meal.date);
      });

      console.log('--- --- ', dbMealsQuentin);

      // const monend = new Date(mon);
      // monend.setDate(mon.getDate());
      // monend.setUTCHours(23, 59, 59, 999);
      // const testF = {
      //   date: {
      //     $gte: mon.toISOString(),
      //     $lt: monend.toISOString(),
      //   },
      // };
      // if (dateFilter) {
      //   const dbMeals = await MealModel.find(testF)
      //     .populate('type')
      //     .populate({
      //       path: 'foods',
      //       populate: {
      //         path: 'category',
      //         model: 'Category',
      //       },
      //     })
      //     .populate('user');
      //   console.log('filter', dateFilter);
      //   console.log('dbMeals', dbMeals);
      //   res.status(200).json(dbMeals);
      // } else {
      //   throw new Error('Format de date invalide');
      // }

      if (dayFilters.length) {
        const dbMeals = await Promise.all([
          MealModel.find({
            $and: [{ user: userId }, dayFilters[0]],
          })
            .populate('type')
            .populate({
              path: 'foods',
              populate: {
                path: 'category',
                model: 'Category',
              },
            })
            .populate('user'),
          MealModel.find({
            $and: [{ user: userId }, dayFilters[1]],
          })
            .populate('type')
            .populate({
              path: 'foods',
              populate: {
                path: 'category',
                model: 'Category',
              },
            })
            .populate('user'),
          MealModel.find({
            $and: [{ user: userId }, dayFilters[2]],
          })
            .populate('type')
            .populate({
              path: 'foods',
              populate: {
                path: 'category',
                model: 'Category',
              },
            })
            .populate('user'),
          MealModel.find({
            $and: [{ user: userId }, dayFilters[3]],
          })
            .populate('type')
            .populate({
              path: 'foods',
              populate: {
                path: 'category',
                model: 'Category',
              },
            })
            .populate('user'),
          MealModel.find({
            $and: [{ user: userId }, dayFilters[4]],
          })
            .populate('type')
            .populate({
              path: 'foods',
              populate: {
                path: 'category',
                model: 'Category',
              },
            })
            .populate('user'),
          MealModel.find({
            $and: [{ user: userId }, dayFilters[5]],
          })
            .populate('type')
            .populate({
              path: 'foods',
              populate: {
                path: 'category',
                model: 'Category',
              },
            })
            .populate('user'),
          MealModel.find({
            $and: [{ user: userId }, dayFilters[6]],
          })
            .populate('type')
            .populate({
              path: 'foods',
              populate: {
                path: 'category',
                model: 'Category',
              },
            })
            .populate('user'),
        ]);
        console.log('********************');
        console.log('******************** dbMeals Promise.all', dbMeals);
        res.status(200).json(dbMeals);
      } else {
        throw new Error('Format de date invalide');
      }
    } catch (error) {
      console.error('error', error);
      next(error);
    }
  }
);

module.exports = router;
