const express = require('express')
const app = express()
const port = 3000

const { User } = require('./models/User')
const bodyParser = require('body-parser')

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true }));

//application/json
app.use(bodyParser.json());

const config = require('./config/key')

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World11!')
})

app.post('/register', (req,res) => {
  // 회원가입할때 필요한 정보들을 client 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})