const router = require('express').Router();
const protectRoute = require("../middlewares/protectRoute");
const Food = require('../../meal-organizer-server/models/Food.model');


// All routes are prefixed by /foods !

router.get("/", (req, res, next) => {
    console.log(req.user);
	Food.find({ user: req.user._id })
        .then(dbRes => {
            res.status(200).json(dbRes);
        })
        .catch(err => console.error(err));
});

router.post("/food", async (req, res, next) => {
    try {
        const madeFood = await Food.create(req.body);
        res.status(201).json(madeFood);
    } catch (error) {
        next(error);
    }
});

router.get('/food/:id', async (req, res, next) => {
    try {
        const oneFood = await Food.findById(req.params.id);
        res.status(200).json(oneFood);
    } catch (error) {
        next(error);
    }
});

module.exports = router;