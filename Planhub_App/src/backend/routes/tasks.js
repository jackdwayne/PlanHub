const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const date = req.body.date;
    const data = req.body.data;
    const priority = Number(req.body.priority);

    const newTask = new Task({
        date,
        data,
        priority,
    });
    newTask.save()
        .then(() => res.json('Task saved and added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) =>{
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' +err ));
});

router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.date = req.body.date;
            task.data = req.body.data;
            task.priority = Number(req.body.priority);

            task.save()
                .then(() => res.json('task updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
    .catch(err => status(400).json('Error: ' + err));
});

module.exports = router;