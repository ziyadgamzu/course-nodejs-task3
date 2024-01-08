const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema({
    stdNo : { 
        type : String
    },

    stdName : {
        type : String
    },

    stdDegree : {
        type : Number
    }
});

module.exports = studentSchema;