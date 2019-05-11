var express = require('express');
var router = express.Router();
const UserSchema = require('../model/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { err: false });
});

router.post('/submit' , (req ,res ) => {
  const username = req.body.User
  const password = req.body.Password
  UserSchema.findOne({user:username} ,(err , user) => {
    if(!user){
      res.render('index' , {err : true})
    }else {
      if(password != user.password){
        res.render('index' , {err : true})
      }else{
        let income = ((user.salary+user.OT+user.Bonus) - ((user.salary+user.OT+user.Bonus)*0.05))
        let Bonus = user.Bonus
        let OT = user.OT
        let salary = user.salary
        income = numberWithCommas(income)
        Bonus = numberWithCommas(Bonus)
        OT = numberWithCommas(OT)
        salary = numberWithCommas(salary)
        res.render('home' , {name : user.name  , surname : user.surname , doctype : user.doctype , salary : salary , OT : OT , Bonus : Bonus , income : income})  
      }
      }
    })
    

})


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = router;
