const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL;

app.use(cors({
  origin: URL, // domain FE thật
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// Fake data
let todos = [
  { id: 1, task: "Học React", done: false },
  { id: 2, task: "Học Node.js", done: true },
];

// API get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// API add new todo
app.post("/api/todos", (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task, done: false };
  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
