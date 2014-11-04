var url = 'http://api.wunderground.com/api/9888e476ac1f7d56/geolookup/forecast10day/q/37217.json';
function getJSONP(url, cbName) {
  var $script = document.createElement('script');
$script.src = url + '?callback=' + cbName;
document.body.appendChild($script);
}

function myAwesomeFunction(data) {
  console.log(data);
  var $ul = document.getElementById("forecast");
  var weather = data;
    addItemsToList($ul, weather);
}
getJSONP(url, 'myAwesomeFunction');



//creating all the elements that will hold the contents
function addItemsToList($items, weather) {
  for (var i = 0; i < 5; i++) {
  var $li = document.createElement("li");
//var $city = document.createElement("p");
  var $conditions = document.createElement("p");
  var $icon_url = document.createElement("img");
  var $title = document.createElement("p");
 // var $fcttext = document.createElement("p"); this text is optional
  var $high = document.createElement("p");
  var $low = document.createElement("p");
 

//inserting the contents in the created elements
  //$city.innerHTML = weather.location.city;
    $conditions.innerHTML = weather.forecast.simpleforecast.forecastday[i].conditions;
    $icon_url.src = weather.forecast.simpleforecast.forecastday[i].icon_url;
    $title.innerHTML = weather.forecast.simpleforecast.forecastday[i].date.weekday;
  //$fcttext.innerHTML = weather.forecast.txt_forecast.forecastday[i].fcttext; //this text is optional
    $high.innerHTML = weather.forecast.simpleforecast.forecastday[i].high.fahrenheit + " "+ "F";
    $low.innerHTML = weather.forecast.simpleforecast.forecastday[i].low.fahrenheit + " " + "F";
   

//inserting the elements with their children to their parent li
  //$li.appendChild($city);
	$li.appendChild($conditions);
    $li.appendChild($icon_url);
    $li.appendChild($title);
   // $li.appendChild($fcttext);// this text is optional
    $li.appendChild($high);
    $li.appendChild($low);

//compiling all the elements
    $items.appendChild($li);
  }
}

/*function currentCity(city) {
var $cityName = document.getElementById('cityName');
$cityName.innerHTML = $city;
}*/

 var $form = document.getElementById('zipcode');
 var $zipBox = $form.querySelector('input[type=number]');
 $form.addEventListener('submit', function(event){
  event.preventDefault();
  var url = "http://api.wunderground.com/api/9888e476ac1f7d56/geolookup/forecast10day/q/" + $zipBox.value + '.json';
  getJSONP(url, 'myAwesomeFunction');
});

	 

