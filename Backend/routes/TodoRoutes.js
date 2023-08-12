const { Router } = require("express");

const { saveToDo } = require("../controller/TodoController");

const router = Router();

router.post("/save", saveToDo);

module.exports = router;