const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a23028d1c14481db985a6aad3afee9d4&query=' + latitude + ',' + longitude
        request({ url:url, json:true } , (err,res)=>{

        if(err)
        {
            callback('unable to forecast' , undefined)
        }else
        {
            callback(undefined ,res.body.current.weather_descriptions[0])
        }
    })
}

forecast(55.2962 ,25.2684, (err,data)=>
{
 console.log("error   "+err )
 console.log("Forecast :   "+data )
})


//module.exports = forecast