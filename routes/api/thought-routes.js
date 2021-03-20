const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getThoughtId
} = require('../../controllers/thought-controller')

router
    // thoughs
    .route('/')
    .post(createThought)
    .get(getAllThoughts);

router
    .route('/:thoughtId')
    .get(getThoughtId)

module.exports = router;