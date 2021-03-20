const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getThoughtId,
    updateThoughtId
} = require('../../controllers/thought-controller')

const {
    createReply
} = require('../../controllers/reply-controller')

router
    // thoughs
    .route('/')
    .post(createThought)
    .get(getAllThoughts);

router
    .route('/:thoughtId')
    .get(getThoughtId)
    .put(updateThoughtId)

router
    .route('/:thoughtId/reactions')
    .post(createReply)

module.exports = router;