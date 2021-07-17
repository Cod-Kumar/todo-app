const todoController = require('./controllers/todoConstroller');
const express = require('express');
router = express.Router();

router.get('/tasks', todoController.index);
router.post('/task/create', todoController.create);

module.exports = router;