const {Router} = require('express');
const router = Router();

const user = require('../models/user');
const userController = require('../controllers/userController');

router.get('/', userController.get_all);

//route for login
router.post('/signup', userController.post_signup);
router.post('/login', userController.post_login);

//route for create model and view
router.get('/bmodels/:userid', userController.get_bmodels_byid);
router.post('/:userid/newbmodels', userController.user_bmodels)





module.exports = router;