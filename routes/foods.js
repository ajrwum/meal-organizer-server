const router = require('express').Router();
const protectRoute = require("../middlewares/protectRoute");
const Food = require('../../meal-organizer-server/models/Food.model');


// All routes are prefixed by /foods !

router.get("/", (req, res, next) => {
	Food.find()
        .then(dbRes => {
            res.status(200).json(dbRes);
        })
        .catch(err => console.error(err));
});

module.exports = router;