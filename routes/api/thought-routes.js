const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getThoughtId,
    updateThoughtId
} = require('../../controllers/thought-controller')

const {
    createReply,
    deleteReply
} = require('../../controllers/reply-controller')

router
    // thoughts
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

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReply)

module.exports = router;