let path = require('path')


let express = require('express')

const app = express()

let staticPath= path.join(__dirname,'/public/reg.html')

app.use(express.static(staticPath))

app.get('', (req,res) =>{

  /*sending json
    res.send({
        
        name:"rupali",
        age:20
    })*/

   // res.sendfile(staticPath)
    //  sending text  res.send("hello express !!!"))
})

// localhost:3000/help
app.get('/Help', (req,res) =>{

      //  sending text
        //res.send("hello express !!!")
  
        res.sendfile(path.join(__dirname,'/public/help.html'))
    })

  app.get('/About',(req,res) =>{

        res.sendfile(path.join(__dirname,'/public/help.html'))

  })


app.listen(3000,() =>{

    console.log("server has started")
})