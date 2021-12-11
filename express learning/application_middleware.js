var express = require('express')
var app = express()
const port = process.env.PORT || 3434


// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

// app.use('/user/:id', function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   })
//   loading a series of middleware functions at a mount point, with a mount path. 
// It illustrates a middleware sub-stack that prints request info for any type of HTTP request to the /user/:id path.
// app.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   })

//   app.get('/user/:id', function (req, res, next) {
//     res.send('USER')
//   })


app.listen(port, ()=>{
    console.log("running...",port)
})

app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    res.send('User Innnnfo')
    next()
  }, function (req, res, next) {
      console.log("hhih")
    res.send('User Info')
  })
  
//   // handler for the /user/:id path, which prints the user ID
//   app.get('/user/:id', function (req, res, next) {
//     res.send(req.params.id)
//   })

//   var express = require('express')
// var app = express()
// var cookieParser = require('cookie-parser')

// // load the cookie-parsing middleware
// app.use(cookieParser())