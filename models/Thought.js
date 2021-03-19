const { Schema, model } = require('mongoose');
const { DateTime } = require('luxon');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: DateTime.now(),

        // Must match a valid email address (look into Mongoose's matching validation)
    },
    username: {
        type: String,
        required: true,
        min: 1,
        max: 280,

    },
    username: {
        type: String,
        required: true,

    },
    createdAt: {
        type: Date,
        default: DateTime.now(),
    }


});


const ThoughtSchema = new Schema({
    throughtText: {
        type: String,
        minlength: 1,
        maxlength: 280,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: DateTime.now(),

        // Must match a valid email address (look into Mongoose's matching validation)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }

)

ThoughtSchema.virtual('reactionsCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;