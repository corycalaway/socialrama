const { Thought, User } = require('../models');
const { Schema, model } = require('mongoose');

thoughtController = {

    // createThought({ body }, res) {
    //     Thought.create(body)
    //         .then(dbUserData => res.json(dbUserData))
    //         .catch(err => res.status(400).json(err));
    // },

    createThought({ body }, res) {
      
        console.log(body)
        Thought.create(body)
          .then(({ _id }) => {
              console.log(body.userId)
             console.log(_id)

            return User.findOneAndUpdate(
              { _id: body.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then(dbUserData => {
              console.log('here')
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            console.log(dbUserData)
            return res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },

   
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getThoughtId({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            // .populate({
            //     path: 'thoughts',
            //     select: '-__v'
            // })
            // .populate({
            //     path: 'friends',
            //     select: '-__v'
            // })
            // .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
}

module.exports = thoughtController;