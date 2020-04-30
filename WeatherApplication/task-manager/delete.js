let mongodb = require('mongodb')
let MongoClient = mongodb.MongoClient

let con = "mongodb://127.0.0.1:27017"
let databse = "task-manager"

MongoClient.connect(con , {useNewUrlParser:true , useUnifiedTopology :true},(error,client)=>{
if(error)
    return console.log(error)

const db = client.db(databse)
// delete one eg
db.collection("users").deleteOne({name : "ab1c"}).then((result) => console.log("Record deleted"+result)).catch((error) => console.log("ERORR"+err))

// delete many eg
db.collection("users").deleteMany({age : 30}).then((result) => console.log("Record deleted"+result)).catch((error) => console.log("ERORR"+err))

})