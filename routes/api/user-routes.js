const router = require('express').Router();

const {
    getAllUsers,
    createUsers
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/pizzas
router
// users
  .route('/')
  .get(getAllUsers)
  .post(createUsers)
  



module.exports = router;