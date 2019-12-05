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
    const priority = req.body.priority;
    
    const newTask = new Task({date,data,priority})

    newTask.save()
        .then(() => res.json('New Task Added'))
        .catch(err => res.status(400).json('Erros: ' + err));
});

module.exports = router;