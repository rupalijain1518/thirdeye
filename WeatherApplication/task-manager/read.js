// r: read : findone and find
let mongodb = require('mongodb')
let MongoClient = mongodb.MongoClient

let conURL = 'mongodb://127.0.0.1:27017'
let database = 'task-manager'

MongoClient.connect(conURL , {useNewUrlParser : true , useUnifiedTopology: true}, (error , client) =>{
        if(error)
            return console.log("Unable to connect with Mongo")
          
        const db = client.db(database)
  
        db.collection('users').findOne({name : "rupali"}, (err,user)=>{

if(err)
    return console.log(err)

    console.log(user.name + '' +user.age + ','+user.sex)

        })



})