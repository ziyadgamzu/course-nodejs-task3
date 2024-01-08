const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({

    userName : {
        type : String,
    },

    email : {
        type : String,
    },

    password : {
        type : String,
    }

});

module.exports = userSchema

