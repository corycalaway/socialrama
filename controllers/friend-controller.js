const { User } = require('../models');

const friendsController = {
    // get all users
    addFriend(req, res) {
        console.log(req._parsedUrl.path)
        let mainUser = req._parsedUrl.path
        // let mainUserId = mainUser.split('/')
        let mainUserId = mainUser.split(/\//)[1]
        // ([0-9A-Za-z])\w+
        console.log(mainUserId)

        console.log(req.params.id)
        console.log(req.params.friendId)
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