const ToDoModel = require("../model/TodoModel");
const CompletedModel = require("../model/CompletedModel")

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {

    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}