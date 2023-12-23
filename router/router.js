// create router
const express = require('express');
const router = express.Router();
// import controllers..
const PostsController = require('../controller/PostsController')
const UsersController = require('../controller/UsersController')
const ProsuctController = require('../controller/ProductController')


//handel pages

router.get('/posts', PostsController.getAllPosts)

router.post('/register', UsersController.register)

router.post('/login', UsersController.login)

router.get('/add-product', ProsuctController.addProduct)


// to make router visible to project 
module.exports = router;