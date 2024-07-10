const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/saveUser', userController.saveUser);
router.post('/searchUsers', userController.searchUsers);
router.put('/updateUser', userController.updateUser);
router.delete('/softDeleteUser', userController.softDeleteUser);
router.get('/listUsers', userController.listUsers);

module.exports = router;
