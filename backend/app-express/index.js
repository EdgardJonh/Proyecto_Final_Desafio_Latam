import express from "express";
const app = express();

let todos = [
    {id:'1', title:'Buy milk', done: false},
    {id:'2', title:'Buy bread', done: true},
    {id:'3', title:'Buy eggs', done: false},
];

app.get("/", (req, res) => {
  res.send(todos);
});

app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    if(!todo) return res.status(404).send('Todo not found');
    res.json(todo);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
