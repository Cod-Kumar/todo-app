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

    if(!req.body) {
        res.status(400).send({
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
        res.status(400).send({
            message: 'Title is requried'
        });
        return;
    }

    const task = {
        title : req.body.title,
        description : req.body.description
    };

    await Task.update(task, {where: {id: req.body.id}})
            .then((result) => {
                if(!result[0])
                    res.status(404).send({'message': 'Task Not Found'});

                res.send({'message': 'Updated Successfully' + result})
            })
            .catch((err) => {
                res.status(500).send({'message': 'Error Occurred - ' + err})
            })
}

module.exports.delete = async (req, res) => {
    if(!req.body.id) {
        res.status(400).send({
            message: 'Id is required'
        });
        return;
    }


    await Task.destroy({where: {id: req.body.id}})
            .then((result) => {
                if(!result)
                    res.status(404).send({'message': 'Task Not Found'});

                res.send({'message': 'Deleted Successfully'})
            })
            .catch((err) => {
                res.status(500).send({'message': 'Error Occurred - ' + err})
            })
}