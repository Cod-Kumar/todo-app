const Task = require('../models/Task');

module.exports.index = async (req, res) => {
	await Task.findAll()
            .then((data) => res.send(data))
            .catch((err) => {
                    res.status(500).send({
                    message: err.message || "Some error occurred while retrieving tutorials."
                });
            });
}

// error
module.exports.create = async (req, res) => {
    res.send(req);
    return;
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