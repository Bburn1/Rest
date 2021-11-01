const users = [
    {name:"Masha", age:19},
    {name:"Andrii", age:20}
  ]
module.exports = function(app){
    app.get('/', (req, res) => {
        res.json(users);
      })

      app.get('/', (req, res) => {
        res.send(users);
      })
}