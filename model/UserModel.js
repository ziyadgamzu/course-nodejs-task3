const UserSchema = require('../schema/user');
const mongoose = require('mongoose');

const User = mongoose.model('User', UserSchema)

module.exports = User