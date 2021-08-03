const todoController = require('./controllers/todoConstroller');
const express = require('express');
router = express.Router();

router.get('/tasks', todoController.index);
router.post('/tasks', todoController.create);
router.put('/tasks', todoController.update);

module.exports = router;