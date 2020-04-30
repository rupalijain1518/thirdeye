//U : update  :updateone and updatemany

let mongodb = require('mongodb')
let MongoClient = mongodb.MongoClient
let ObjectID = mongodb.ObjectID

let conUrl = "mongodb://127.0.0.1:27017"
let database = "task-manager" // can be anything must be same for a project

MongoClient.connect(conUrl , {useNewUrlParser : true , useUnifiedTopology:true},(err,client)=>{

    if(err)
    return console.log("Unable to connect with Mongo")

    //if connection established -> select db

    const db = client.db(database)
// chnage name 
   const updatePromise = db.collection("users").updateOne({
        
        _id : new ObjectID("5ea9c6a2a2a2b32f80398a5f")
    }, {
        $set:{
        name : 'Rupali'
       }
     })
     updatePromise.then((result)=>{
        console.log("result:"+result)
        }
        
        ).catch((err)=>{
            console.log("error:"+err)
            })
// update age with $inc prop        
            const updatePromise1 = db.collection("users").updateOne({
        
                _id : new ObjectID("5ea9c6a2a2a2b32f80398a5f")
            }, {
                $inc:{
                age : 1
               }
             })
             updatePromise1.then((result)=>{
                console.log("result:"+result)
                }
                
                ).catch((err)=>{
                    console.log("error:"+err)
                    })
                
        


        })