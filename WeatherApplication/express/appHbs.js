// views  folder must be in the top of root directory : cant be a sub folder

let path = require('path')
let hbs = require('hbs')
let express = require('express')
let geocode = require('./geocode')
let forecast = require('./forecast')
const viewsPath = path.join(__dirname,'/templates/views')
const partialPath =  path.join(__dirname,'/templates/partials')

// register partials with hbs
hbs.registerPartials(partialPath)
const app = express()
app.set('view engine','hbs')
app.set('views',viewsPath)


app.get('', (req,res) =>{
    res.render('index',{// first arg : name of hbs file
        title : 'INDEX PAGE',//in this case json data
        name :'THIRD EYE'

    })
})

// localhost:3000/help
app.get('/Help', (req,res) =>{

    res.render('help',{
        title : 'HELP PAGE',
        name :'THIRD EYE'

    })
})

// setting the route for the weather.. if there ia an address will display static content 
//... else will display an error
/*app.get('/Weather', (req,res) =>{



        if(!req.query.address){

            return res.send({
                error : "you are required to enter the adress"
            })
        }
    
    res.send({
        Weather : 'cloudy',
        name :'New York'

    })
})
*/


// dynamic weather 



app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
// shorthand plus destructuring have been used
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})



  app.get('/About',(req,res) =>{

    res.render('about',{
        title : 'ABOUT PAGE',
        name :'THIRD EYE'

    })
  })
// order of the route is also impt.
  app.get('/Help/*' , (req,res) =>{
    
    res.render('404',{
        title : 'ABOUT PAGE',
        name :'THIRD EYE',
        errorMessage :'NO Content Found For Help'
    })

})

  app.get('*' , (req,res) =>{

    res.render('404',{
        title : 'ABOUT PAGE',
        name :'THIRD EYE',
        errorMessage :'NO Such Page Found'
    })

  })


 

app.listen(3000,() =>{

    console.log("server has started")
})