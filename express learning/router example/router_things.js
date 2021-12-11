var express = require('express');
var router = express.Router();

let person =[
   {
      "name" : "galio",
      "talent" : "standing on one finger in mild fire"
   },
   {
      "name" : "yato",
      "talent" : "rapper"
   }
]

router.get('/users/:name', function(req, res){
   if(req.params.name){
     const talents =  person.find(element => element.name == req.params.name)
    return res.send(talents);
   }
   res.send('GET route on things.');
});
router.post('/users', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;