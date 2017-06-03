var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4b8d06411db9758c752cb3889b3a220e&units=imperial';


//4b8d06411db9758c752cb3889b3a220e
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4b8d06411db9758c752cb3889b3a220e
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
        if(res.data.cod && res.data.message){
          throw new Error(res.message);
        }else{
          return res.data.main.temp;
        }
    }, function (res) {
      throw new Error(res.message)
    });
  }
}
