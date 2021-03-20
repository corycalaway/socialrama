const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getThoughtId,
    updateThoughtId
} = require('../../controllers/thought-controller')

router
    // thoughs
    .route('/')
    .post(createThought)
    .get(getAllThoughts);

router
    .route('/:thoughtId')
    .get(getThoughtId)
    .put(updateThoughtId)

module.exports = router;