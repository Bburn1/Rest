const express = require('express'),
  app = express(),


const users = [
  {name:"Masha", age:19},
  {name:"Andrii", age:20}
]

app.get("/", (req, res) => {
  res.json(users);
})

app.post("/", (req, res) => {
  res.send(users);
})

  app.listen(3000);


