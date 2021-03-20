const router = require('express').Router();

const {
    createThought
} = require('../../controllers/thought-controller')

router
    // thoughs
    .route('/')
    .post(createThought)

module.exports = router;