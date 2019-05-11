const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = new Schema({
    name : String ,
    surname : String ,
    doctype : String ,
    user : String ,
    password : String ,
    salary : Number ,
    OT : Number ,
    Bonus : Number
},{collection : 'mst_employee'})

module.exports = mongoose.model('mst_employee', User)