const request = require('request')
const geocode = require('./geoCode') // same folder
const url = 'http://api.weatherstack.com/current?access_key=a23028d1c14481db985a6aad3afee9d4&query=20.5937,%2078.9629&units=f'
console.log(url)

/*
//method - 1
request({url:url}, (err,res)=> {

if(err)
{
    console.log("error"+err)
}else
{
    const data = JSON.parse(res.body)
    console.log(data.current.weather_code)
}

} )


//method - 2
request({url:url , json:true }, (err,res)=> {

    if(err)
    {
        console.log("error"+err)
    }else
    {
        console.log("Todays tempt: "+ res.body.current.temperature + "and it feels like: " + res.body.current.feelslike)
    }
    
    } )

    // to display the longitude and latitutde
    const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnVwYWxpamFpbjE1MTgiLCJhIjoiY2s5Z3prdTY2MDd4cTNubXdyanY4NGhsZyJ9.IlfuEsUONB3HdZBZO7kjhQ'

    request({url: geourl , json:true }, (err,res)=> {

        if(err)
        {
            console.log("error" + err)
        }else
        {
            console.log("coordinates of" +  res.body.features[0].place_name + "are "+res.body.features[0].center[0] + " ," + res.body.features[0].center[1]) 
        }
        
        } )

*/
