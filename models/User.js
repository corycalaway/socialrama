const { Schema, model } = require('mongoose');
const { DateTime } = require('luxon');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You must provide a username!',
        trim: true
    },
    email: {
        type: String,
        required: 'You must provide a valid email address!',
        unique: true,
        // Must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: 
        
    
    [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
  
    }]

},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }

)

UserSchema.virtual('friendsCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;