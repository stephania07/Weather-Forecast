var url = 'http://api.wunderground.com/api/9888e476ac1f7d56/geolookup/forecast10day/q/37217.json';
function getJSONP(url, cbName) {
  var $script = document.createElement('script');
$script.src = url + '?callback=' + cbName;
document.body.appendChild($script);
}

function myAwesomeFunction(data) {
  var $ul = document.getElementById("forecast");
  var weather = data;
	$city = document.querySelector('.city');
	$city.innerHTML = weather.location.city;
	addItemsToList($ul, weather);
}
getJSONP(url, 'myAwesomeFunction');

//creating all the elements that will hold the contents
function addItemsToList($items, weather) {
  for (var i = 0; i < 5; i++) {
  var $li = document.createElement("li");
  var $conditions = document.createElement("p");
  var $icon_url = document.createElement("img");
  var $title = document.createElement("p");
  var $high = document.createElement("p");
  var $low = document.createElement("p");

//inserting the contents in the created elements
    $conditions.innerHTML = weather.forecast.simpleforecast.forecastday[i].conditions;
    $icon_url.src = weather.forecast.simpleforecast.forecastday[i].icon_url;
    $title.innerHTML = weather.forecast.simpleforecast.forecastday[i].date.weekday;
    $high.innerHTML = weather.forecast.simpleforecast.forecastday[i].high.fahrenheit + " "+ "F";
    $low.innerHTML = weather.forecast.simpleforecast.forecastday[i].low.fahrenheit + " " + "F";

//inserting the elements with their children to their parent li
	  $li.appendChild($conditions);
    $li.appendChild($icon_url);
    $li.appendChild($title);
    $li.appendChild($high);
    $li.appendChild($low);

//compiling all the elements
    $items.appendChild($li);
  }
}

 var $form = document.getElementById('zipcode');
 var $zipBox = $form.querySelector('input[type="number"]');
 $form.addEventListener('submit', function(event){
  event.preventDefault();
  var url = "http://api.wunderground.com/api/9888e476ac1f7d56/geolookup/forecast10day/q/" + $zipBox.value + ".json";
  getJSONP(url, 'myAwesomeFunction');
});

	 

