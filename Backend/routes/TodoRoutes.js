const { Router } = require("express");
const router = Router();
const { getTodo, getDone, saveTodo, deleteTodo,
    moveToDone, moveToTodo, updateTodo } = require("../controller/TodoController");

router.post("/saveTodo", saveTodo);
router.get("/getTodo", getTodo);
router.get("/getDone", getDone);
router.post("/updateTodo", updateTodo);
router.post("/deleteTodo", deleteTodo);
router.post("/moveToDone", moveToDone);
router.post("/moveToTodo", moveToTodo);

module.exports = router;