//express add injs file
const express = require("express");
const app = express();

const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
//data base connection
const { todo } = require("./db");
app.use(express.json());
app.use(cors());
//add todo

app.post("/todo", async function (req, res) {
  const createPaylod = req.body;
  const parsePaylod = createTodo.safeParse(createPaylod);
  if (!parsePaylod.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPaylod.title,
    description: createPaylod.description,
    completed: true,
  });
  res.json({
    msg: "Todo Created",
  });
});

//get all list of todos

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

//complet a specifc todo as complet

app.put("/complete", async function (req, res) {
  const createPaylod = req.body;
  const parsePaylod = updateTodo.safeParse(createPaylod);
  if (!parsePaylod.success) {
    res.status(411).json({
      msg: "You send the wrong input",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: false,
    }
  );
  res.json({
    msg: "Todo mark as done",
  });
});

//port listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
