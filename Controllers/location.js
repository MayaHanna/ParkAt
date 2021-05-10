const https = require('https')

const getLocationByAddress = async (address) => {
  try{
      https.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&language=iw&fields=geometry&key=AIzaSyAe1Rhuj_BjDOoiqc3qF39_FOGFhd78d5Q`, resGoogle => {
          console.log(`statusCode: ${resGoogle.statusCode}`)
      
          resGoogle.on('data', d => {
              return d;
          })
      }).on('error', error => {
        process.stdout.write("error");
      });

    process.on('uncaughtException', function (err) {
      console.log(err);
    });

  } catch (e) {
      res.status(400).send("Error");
  }
}

module.exports = {
  getLocationByAddress
}