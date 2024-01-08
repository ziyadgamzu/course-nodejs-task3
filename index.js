// create express server
const express = require('express');
const router = require('./router/router');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();




//import model
const UserModel = require('./model/UserModel');
const StudentModel = require('./model/StudentModel');


//connect to DataBase
mongoose.connect('mongodb://localhost:27017/School', {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("mongoDB connected!")
}).catch((err) => {
    console.log(err)
})






/*

UserModel.create({
    userName : "ziyad",
    email : "ziyad@gmail.com",
    passward : "12345"
}).then(() => {
    console.log("Done")
}).catch((err) => {
    console.log(err)
})


UserModel.findOne({userName : "mohannad"}).then((data)=>{
    console.log(data)
    console.log(`here!, ${data.userName}'s Data`)
}).catch((err)=>{
    console.log(err)
})

UserModel.find().then((data)=>{
    console.log(data)
    console.log("Got it!!")
}).catch((err)=>{
    console.log(err)
})

*/


app.use(cors());
app.use(express.urlencoded({extended : true}));


//listen function take 2 paramiters port and callback function (3000, () =>{} )
app.use(router);
app.listen(3000, () =>{
    console.log("im Working");
});