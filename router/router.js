// create router
const express = require('express');
const router = express.Router();
// import controllers..
const PostsController = require('../controller/PostsController');
const UsersController = require('../controller/UsersController');
const ProsuctController = require('../controller/ProductController');
const StudentController = require('../controller/StudentController');
//middlewares
const { checkSalary } = require('../middleware/Check');
const { Check_registerNullValues, Check_loginNullValues } = require('../middleware/Validation');


//handel pages

router.get('/posts', PostsController.getAllPosts)



router.post('/register', Check_registerNullValues, UsersController.register);
router.post('/login', Check_loginNullValues, UsersController.login);
router.get('/add-product', ProsuctController.addProduct);
router.post('/users/salary', checkSalary, UsersController.getAllUsersSalary);

router.post('/create-student', StudentController.create)
router.get('/all-students', StudentController.find)
router.get('/get-student-by-number/:stdNo',StudentController.findOne)


// to make router visible to project 
module.exports = router;