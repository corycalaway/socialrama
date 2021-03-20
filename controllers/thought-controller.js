const { Thought, User } = require('../models');
const { Schema, model } = require('mongoose');

thoughtController = {
  createThought({ body }, res) {

    Thought.create(body)
      .then(({ _id }) => {

        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        return res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },


  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        res.status(400).json(err);
      });
  },

  getThoughtId({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
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

  updateThoughtId({ params, body }, res) {
    console.log(params)
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },
}

module.exports = thoughtController;