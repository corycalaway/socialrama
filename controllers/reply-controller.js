const { Thought, User } = require('../models');

replyController = {

    
   
      
        
        createReply({ params, body }, res) {
            Thought.findOneAndUpdate(
              { _id: params.thoughtId },
              { $push: { reactions: body } },
              { new: true, runValidators: true }
            )
              .then(dbPizzaData => {
                if (!dbPizzaData) {
                  res.status(404).json({ message: 'No pizza found with this id!' });
                  return;
                }
                res.json(dbPizzaData);
              })
              .catch(err => res.json(err));
          },
    //     Reaction.create(body)
    //       .then(({ _id }) => {
    //           console.log(body.userId)
    //          console.log(_id)

    //         return Thought.findOneAndUpdate(
    //           { _id: body.thoughtId},
    //           { $push: { reactions: _id } },
    //           { new: true }
    //         );
    //       })
    //       .then(dbUserData => {
    //           console.log('here')
    //         if (!dbUserData) {
    //           res.status(404).json({ message: 'No User found with this id!' });
    //           return;
    //         }
    //         console.log(dbUserData)
    //         return res.json(dbUserData);
    //       })
    //       .catch(err => res.json(err));
    //   },
}

module.exports = replyController;