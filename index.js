// create express server
const express = require('express');
const router = require('./router/router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));

//listen function take 2 paramiters port and callback function (3000, () =>{} )
app.use(router);
app.listen(3000, () =>{
    console.log("im Working");
});