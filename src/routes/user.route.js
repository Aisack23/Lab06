const { addUserController, showForm } = require('../controllers/user.controller.js');
const { showUserController } = require('../controllers/user.controller.js');
const router = require('express').Router();
router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', showUserController);
module.exports = router;
