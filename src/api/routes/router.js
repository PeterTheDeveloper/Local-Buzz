const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userController = require('../controllers/Users');
const postController = require('../controllers/Posts');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(cookieParser());

// const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

// Remember to compartmentalize file structure.

// /**  GET'S **/
// router.get('/', (req, res) => console.log('hey this works'));
// router.get('/users', (req, res) => userController.getAll);
<<<<<<< HEAD
router.get('/posts' ,postController.getAllPosts);
=======
router.get('/posts', postController.getAllPosts);
>>>>>>> d073b2c6b75b21efacc6242f36b200f1a33d1eea
// router.get('logout',  userController.logout + React Route change ? );

// /** POST'S **/
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/posts', userController.authenticate,postController.createPost);
// router.post('/posts/:postId');

// /** PUT'S **/
// router.put('/users/:userId', /* userController.update */);
router.put('/posts/:postId', postController.updatePosts);

// /** DELETE'S **/
// router.delete('/users/:userId', /* userController.delete */);
<<<<<<< HEAD
router.delete('/posts/:postId', postController.deletePosts );
=======
router.delete('/posts/:postId', postController.deletePosts);
>>>>>>> d073b2c6b75b21efacc6242f36b200f1a33d1eea

module.exports = router;
