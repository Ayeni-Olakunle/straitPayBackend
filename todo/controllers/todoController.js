const asyncHandler = require("express-async-handler")
const Todo = require("../models/todoModel")


const getTodo = asyncHandler(async (req, res) => {
    const todos = await Todo.find()
    res.status(200).json(todos);
})

const postTodo = asyncHandler(async (req, res) => {
    if (!req.body.todoName) {
        res.status(400)
        throw new Error("Please add a todo")
    }
    const todos = await Todo.create({
        todoName: req.body.todoName,
        todoLink: req.body.todoLink,
        todoDescription: req.body.todoDescription,
    })
    res.status(200).json(todos);
})

const editTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(400)
        throw new Error(`Todo not found`);
    }

    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updateTodo);
})

const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(400);
        throw new Error("Todo not found");
    }
    await todo.deleteOne();
    res.status(200).json({ deleted: `Item with id of ${req.params.id} is deleted` });
})

module.exports = {
    getTodo,
    postTodo,
    editTodo,
    deleteTodo
}