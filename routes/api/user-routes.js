const router = require('express').Router();

const {
    getAllUsers,
    createUsers
  } = require('../../controllers/user-controller');

const {
    addFriend
} = require('../../controllers/friend-controller')

// Set up GET all and POST at /api/pizzas
router
// users
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

router
    .route('/:id/friends/:friendId')
    .post(addFriend);



module.exports = router;