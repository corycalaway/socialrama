const router = require('express').Router();

const {
  getAllUsers,
  createUsers,
  updateUser,
  getUserId,
  deleteUser
} = require('../../controllers/user-controller');

const {
  addFriend, deleteFriend
} = require('../../controllers/friend-controller')

// Set up GET all and POST at /api/pizzas
router
  // users
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

router
  .route('/:userId')
  .put(updateUser)
  .get(getUserId)
  .delete(deleteUser);

router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);






module.exports = router;