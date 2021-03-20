const { Thought, User } = require('../models');

replyController = {

    
   
      
        
        createReply({ params, body }, res) {
            Thought.findOneAndUpdate(
              { _id: params.thoughtId },
              { $push: { reactions: body } },
              { new: true, runValidators: true }
            )
              .then(dbThoughtData => {
                if (!dbThoughtData) {
                  res.status(404).json({ message: 'No User found with this id!' });
                  return;
                }
                res.json(dbThoughtData);
              })
              .catch(err => res.json(err));
          },

          deleteReply({ params }, res) {
              console.log(params.thoughtId )
              console.log(params.reactionId )
            Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $pull: { reactions: params.reactionId } },
                { new: true }
              )
            // Thought.findOneAndDelete({ _id: params.reactionId })
            //   .then(deletedReply => {
            //     if (!deletedReply) {
            //       return res.status(404).json({ message: 'No reply with this id!' });
            //     }
            //     return Thought.findOneAndUpdate(
            //       { _id: params.thoughtId },
            //       { $pull: { reactions: params.reactionId } },
            //       { new: true }
            //     );
            //   })
              .then(dbThoughtData => {
                if (!dbThoughtData) {
                  res.status(404).json({ message: 'No User found with this id!' });
                  return;
                }
                res.json(dbThoughtData);
              })
              .catch(err => res.json(err));
          }
  
}

module.exports = replyController;