var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/userlist', function(req, res) {
//     var db = req.db;
//     var collection = db.get('usercollection');
//     collection.find({},{},function(e,docs){
//         res.render('userlist', {
//             "userlist" : docs
//         });
//     });
// });

// router.get('/newuser', function(req,res) {
//   res.render('newuser', { title: 'Add a new User Here:'})
// });

// router.post('/adduser', function(req,res){
//   var db = req.db;
//   var userName = req.body.username;
//   var userEmail = req.body.useremail;
//   var collection = db.get('usercollection');

//   collection.insert({
//     'username' : userName,
//     'email' : userEmail,

//   }, function(err, doc){
//     if(err){
//       res.send("There was an issue saving your data")
//     }
//     else {
//       res.redirect('userlist');
//     }
//   });
// });

module.exports = router;
