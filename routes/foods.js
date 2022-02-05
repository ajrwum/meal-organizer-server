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

// Get all foods for connected user
router.post("/food", async (req, res, next) => {
    try {
        const madeFood = await Food.create(req.body);
        res.status(201).json(madeFood);
    } catch (error) {
        next(error);
    }
});

// Get a specific food for connected user
router.get('/food/:id', async (req, res, next) => {
    try {
        const oneFood = await Food.findById(req.params.id);
        res.status(200).json(oneFood);
    } catch (error) {
        next(error);
    }
});

// Update a specific food for connected user
router.patch('/food/:id', (req, res, next) => {
    Food.findByIdAndUpdate(req.params.id, req.body)
        .then(updateFood => {
            res.status(200).json(updateFood);
        })
        .catch(next);
});

// Delete a specific food for connected user
router.delete('/food/:id', (req, res, next) => {
    Food.findOneAndDelete(req.params.id)
        .then(deleteFood => {
            res.status(200).json(deleteFood);
        })
        .catch(next);
});

module.exports = router;