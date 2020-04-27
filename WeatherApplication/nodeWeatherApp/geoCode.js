const request = require('request')
// creating call back for the geocode
        const geocode = (address,callback) => 
        {
         const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicnVwYWxpamFpbjE1MTgiLCJhIjoiY2s5Z3prdTY2MDd4cTNubXdyanY4NGhsZyJ9.IlfuEsUONB3HdZBZO7kjhQ'
         request({url:url, json:true},(err,res) => {
        
            if(err)
            {
                callback('Unable to connect',undefined)
            }
            else
            {
                callback(undefined,{
                    lat : res.body.features[0].center[0],
                    long : res.body.features[0].center[1],
                    loc : res.body.features[0].place_name
                })
        
            }
         })
        }
        
        
                geocode('Dubai',(err,data)=>
                {
                    console.log("error  "+err)
                    console.log("data "+data.lat+' ' + data.long + data.loc)
                    
        
                })

                module.exports = geocode