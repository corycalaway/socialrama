const { User } = require('../models');

const friendsController = {
   

    // adds friends host:/api/users/:id/friends/:friendId
    async addFriend(req, res) {

        try {
      
            const checkDuplicate = await User.findOne({ _id: req.params.id, friends: req.params.friendId})
          
            // if checkduplicate can't find one that matches user and friend id then run update
            if (!checkDuplicate) {

                const usermain = await User.findOneAndUpdate(
                    { _id: req.params.id },
                    { $push: { friends: req.params.friendId } },
                    { new: true }
                )

                const userfriend = await User.findOneAndUpdate(
                    { _id: req.params.friendId },
                    { $push: { friends: req.params.id } },
                    { new: true }
                )
                res.json(usermain)
                res.json(userfriend)
            }
        } catch (err) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        res.status(404).json({ message: 'You are already friends!' });
        return;

    },
};

module.exports = friendsController;