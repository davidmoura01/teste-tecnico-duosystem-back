const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())

app.listen(9000)

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

const user = {
    email:"moura_david@hotmail.com",
    password: "123456"
}
app.post('/login', (req, res) => {



  if(user.email == req.body.email && user.password == req.body.password){
    res.send (true)
  } else {
    res.send (false)
  }
  
})




