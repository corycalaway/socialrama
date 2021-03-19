const { User } = require('../models');

const friendsController = {
    // get all users
    async addFriend(req, res) {
        console.log(req._parsedUrl.path)
        let mainUser = req._parsedUrl.path
        // let mainUserId = mainUser.split('/')
        let mainUserId = mainUser.split(/\//)[1]
        // ([0-9A-Za-z])\w+
        console.log(mainUserId)

        console.log(req.params.id)
        console.log(req.params.friendId)

        // check user/friends to see if req.params.friendid exists
        try {
            // const checkDuplicate = await User.findOne({ friends: req.params.friendId })
            const checkDuplicate = await User.findOne({ _id: req.params.id, friends: req.params.friendId})
            console.log('hhhhhhheeeeeerrrreeeee')


            // } catch (err) {
            //     res.status(404).json({ message: 'No user found with this id!' });
            // }
            // try {
            console.log(checkDuplicate)
            //     const checkDuplicate = await User.fineOne({friends: req.params.friendId})
            //     console.log(checkDuplicate)

            // } catch(err) {
            //     console.log('here')
            // }
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
            return
        }

        


        res.status(404).json({ message: 'You are already friends!' });
        return;
        //   .then(dbUserData => {
        //       console.log(dbUserData)
        //     if (!dbUserData) {

        //       res.status(404).json({ message: 'No user found with this id!' });
        //       return;
        //     }
        //     res.json(dbUserData);
        //   })
        //   .catch(err => res.json(err));
        // find username that matches friend id

        // find and update user



        // update user friends with username found

        // createUsers({ body }, res) {
        //     User.create(body)
        //         .then(dbUserData => res.json(dbUserData))
        //         .catch(err => res.status(400).json(err));
        // },
        // User.find({})
        //     .populate({
        //         path: 'friends',
        //         select: '-__v'
        //     })
        //     .select('-__v')
        //     .sort({ _id: -1 })
        //     .then(dbUserData => res.json(dbUserData))
        //     .catch(err => {
        //         console.log(err);
        //         res.status(400).json(err);
        //     });
    },

    //create user
    // createUsers({ body }, res) {
    //     User.create(body)
    //         .then(dbUserData => res.json(dbUserData))
    //         .catch(err => res.status(400).json(err));
    // },
};

module.exports = friendsController;