const Task = require('../models/Task');

module.exports.index = async (req, res) => {
	await Task.findAll()
            .then((data) => res.status(200).send({"data": data}))
            .catch((err) => {
                    res.status(500).send({
                    message: err.message || "Some error occurred while retrieving tutorials."
                });
            });
}

module.exports.create = async (req, res) => {

    if(!req.body.title) {
        req.status(400).send({
            message: 'Title is requried'
        });
        return;  
    }

    const task = {
        title : req.body.title,
        description : req.body.description
    };

    await Task.create(task)
            .then((data) => {
                res.send(data)
            })
            .catch((err)=>  {
                res.status(500).send({'message' : err.message || 'Server Error'});
            });
}

module.exports.update = async (req, res) => {

    if(!req.body.title) {
        req.status(400).send({
            message: 'Title is requried'
        });
        return;
    }

    const task = {
        title : req.body.title,
        description : req.body.description
    };

    Task.update(task, {where: {id: req.body.id}})
        .then((result) => {
            if(!result)
                res.status(404).send({'message': 'Task Not Found'});

            res.send({'message': 'Updated Successfully' + result})
        })
        .error((err) => {
            res.status(500).send({'message': 'Error Occurred - ' + err})
        })

    res.send(newTask)
}

module.exports.delete = async (req, res) => {
    if(!req.params.id) {
        req.status(400).send({
            message: 'Id is required'
        });
        return;
    }

    Task.delete({where: {id: req.params.id}})
        .then((resutl) => res.send({'message': 'Deleted Successfully'}))
        .error((err) => {
            res.status(500).send({'message': 'Error Occurred - ' + err})
        })
}