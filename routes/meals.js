const router = require('express').Router();

const MealModel = require('./../models/Meal.model');

/* ========================================================= */
/* *** All routes here are prefixed with: '/meals'       *** */
/* ========================================================= */

router.post(
  '/meal',
  /* isAuthenticated, */ (req, res, next) => {
    console.log('--- POST - /meals/meal --- req params:', req.params);
    res.status(200).json({ msg: '@todo' });
  }
);

router.get(
  '/meal/:id',
  /* isAuthenticated, */ (req, res, next) => {
    console.log('--- GET - /meals/meal/:id --- req params:', req.params);
    res.status(200).json({ msg: '@todo' });
  }
);

router.patch(
  '/meal/:id',
  /* isAuthenticated, */ (req, res, next) => {
    console.log('--- PATCH - /meals/meal/:id --- req params:', req.params);
    res.status(200).json({ msg: '@todo' });
  }
);

router.delete(
  '/meal/:id',
  /* isAuthenticated, */ (req, res, next) => {
    console.log('--- DELETE - /meals/meal/:id --- req params:', req.params);
    res.status(200).json({ msg: '@todo' });
  }
);

router.get(
  '/:weekId',
  /* isAuthenticated, */ (req, res, next) => {
    console.log('req.user', req.user);
    console.log('--- GET - /meals/:weekId --- req params:', req.params);
    res.status(200).json({ msg: '@todo' });
  }
);

module.exports = router;
