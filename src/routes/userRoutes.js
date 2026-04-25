const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Definición de rutas apuntando a los métodos estáticos
router.get('/', UserController.getUsers);
router.post('/', UserController.create);

module.exports = router;