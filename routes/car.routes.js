const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');

// Rotas para as operações CRUD
router.post('/cars', carController.createCar);
router.get('/cars', carController.getAllCars);
router.get('/cars/:id', carController.getCarById);
router.put('/cars/:id', carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);

module.exports = router;