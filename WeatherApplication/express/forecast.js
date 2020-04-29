       const request = require('request')

    const forecast = (latitude, longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=a23028d1c14481db985a6aad3afee9d4&query=' + latitude + ',' + longitude
    
        request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined ,body.current.weather_descriptions[0])
            }
        })
    }
    
    module.exports = forecast