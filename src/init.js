var config = require('./config');

function init() {
  //Get geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      setPosition(latitude, longitude);
    });
  } else {
    console.log("Not support Geolocation!");
    var latitude = config.defaultConfig.latitude;
    var longitude = config.defaultConfig.longitude;
    setPosition(latitude, longitude);
  }
}

function setPosition(latitude, longitude) {
  var map = L.map('map').setView([latitude, longitude], config.defaultConfig.zoom);
  L.tileLayer(config.cloudmade.url, {
    attribution: config.cloudmade.attribution
  }).addTo(map);
  L.Icon.Default.imagePath = '/static/js/images';
  var marker = L.marker([latitude, longitude]).addTo(map);
}
init();
