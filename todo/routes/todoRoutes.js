const express = require('express')
const router = express.Router()
const {
    getTodo,
    postTodo,
    editTodo,
    deleteTodo
} = require("../controllers/todoController")


router.route("/").get(getTodo).post(postTodo)
router.route("/:id").put(editTodo).delete(deleteTodo)

module.exports = router