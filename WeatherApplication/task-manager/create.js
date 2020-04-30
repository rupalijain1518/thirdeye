// c : create : insertone and insert many
let mongodb = require('mongodb')
let MongoClient = mongodb.MongoClient

let conURL = 'mongodb://127.0.0.1:27017'
let database = 'task-manager'

MongoClient.connect(conURL , {useNewUrlParser : true , useUnifiedTopology: true}, (error , client) =>{
        if(error)
            return console.log("Unable to connect with Mongo")
          
        const db = client.db(database)
    /*    db.collection('users').insertOne({
            name : "rupali",
            age: 27
        })*/
// to insert multiple records
/*        db.collection('users').insertMany([{
            name : "ab1c", age :20
        },
        { 
            name : "pqr1" , age : 30 , sex : "m"
        }], (err,result)=>{
            if(err)
                return console.log(err)
            console.log(result.ops)
        })*/

        db.collection('tasks').insertMany([{
            name : "ab1c", age :20
        },
        { 
            name : "pqr1" , complete : true
        }]         )



})