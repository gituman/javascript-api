var button = document.getElementById("mybutton")
var inputvalue = document.querySelector('.inputvalue')
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=e7567fec5e8d9c3544791f32e23a521c')
			.then(response => response.json())
			.then(data => {
				var cityvalue =data['name']
				var tempvalue =data['main']['temp'];
				var descvalue =data['weather'][0]['description'];

				city.innerHTML =cityvalue;
				temp.innerHTML =tempvalue;
				desc.innerHTML = descvalue
			})

			.catch(err => alert("wrong city name"))

})