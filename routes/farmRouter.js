const express = require('express');
const { addFarm, fetchFarms } = require('../controllers');

const farmRouter = express.Router();

farmRouter
    .post('/', addFarm)
    .get('/', fetchFarms);

module.exports = farmRouter;
