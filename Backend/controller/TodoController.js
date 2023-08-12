const TodoModel = require("../model/TodoModel");
const doneModel = require("../model/DoneModel");

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find();
    res.send(todo);
}

module.exports.getDone = async (req, res) => {
    const completed = await doneModel.find();
    res.send(completed);
}

module.exports.saveTodo = (req, res) => {

    const { text } = req.body;

    TodoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteTodo = (req, res) => {
    const { _id } = req.body;

    TodoModel.findByIdAndDelete(_id)
        .then((data) => {
            console.log("Deleted Successfully...")
            console.log(data)
            res.send("Deleted Successfully")
        })
        .catch((err) => console.log(err));
}

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body;
    await TodoModel.findByIdAndUpdate(_id, { text })
        .catch((error) => { console.log(error) })

    TodoModel.findById(_id)
        .then((data) => {
            console.log('update success')
            res.send(data)
        }).catch((error) => {
            console.log(error)
        })
}

module.exports.moveToDone = async (req, res) => {
    const { _id } = req.body;

    var { text } = await TodoModel.findById(_id)
        .catch(err => { console.log(err) })

    await doneModel.create({ text })
        .then((data) => {
            res.send(data)
        })
        .catch((error) => { console.log(error); })

    await TodoModel.findByIdAndDelete(_id).catch(error => {
        console.log(error)
    })
}

module.exports.moveToTodo = async (req, res) => {
    const { _id } = req.body;

    var { text } = await doneModel.findById(_id)
        .catch(err => { console.log(err) })

    await TodoModel.create({ text })
        .then((data) => {
            res.send(data)
        })
        .catch((error) => { console.log(error); })

    await doneModel.findByIdAndDelete(_id).catch(error => {
        console.log(error)
    })
}