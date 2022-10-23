const express = require('express')
const app = express()
const bodyParser = require('body-parser');


//##########routes#######
const user_routes = require('./api/routes/users_router')
const manufacture_router = require('./api/routes/manufacture_router')
const hmo_router = require('./api/routes/hmo_router')
const addresses_routes = require('./api/routes/addresses_router')
const user_sick_details_router = require('./api/routes/user_sick_details_router')
const users_vaccination_router = require('./api/routes/users_vaccination_router')
const vaccination_router = require('./api/routes/vaccination_router')

// const morgan = require('morgan')
//#######################


// accessible to any
app.use(require('cors')())
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return res.status(200).json({})
  }
  next()
})

//Body parser middleware to handle raw JSON files
app.use(express.json())

app.use('/api/users', user_routes)
app.use('/api/manufacture', manufacture_router)
app.use('/api/hmo', hmo_router)
app.use('/api/addresses', addresses_routes)
app.use('/api/sick', user_sick_details_router)
app.use('/api/user_vac', users_vaccination_router)
app.use('/api/vac', vaccination_router)


//when invalid routes are entered
app.use(async(req,res)=>{
    res.status(404).send("404 NOT FOUND")
})

module.exports = app