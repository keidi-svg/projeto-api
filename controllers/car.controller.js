const Car = require('../models/car.model');

// Criar um novo carro
exports.createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o carro.' });
  }
};

// Listar todos os carros
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carros.' });
  }
};

// Buscar carro por ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado.' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o carro.' });
  }
};

// Atualizar um carro
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado.' });
    }
    await car.update(req.body);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o carro.' });
  }
};

// Deletar um carro
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado.' });
    }
    await car.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o carro.' });
  }
};