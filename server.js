const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = 3000;

let employees = [
  { name: "John Doe", id: 1, department: "Sales" },
  { name: "Jane Smith", id: 2, department: "Marketing" },
  { name: "Jim Brown", id: 3, department: "HR" },
  { name: "Emily Davis", id: 4, department: "Finance" },
  { name: "Michael Johnson", id: 5, department: "Engineering" },
];

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.post("/employees", (req, res) => {
  const { employee } = req.body;
  employees.push(employee);
  console.log(employees);
  res.status(401).send();
});

app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.filter((empl) => empl.id != id);
  res.status(201).send(employees);
});

app.get("/about", (req, res) => {
  res.send("Hello, World!\n");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Methods
// GET
// post
//patch
// delete
//put
