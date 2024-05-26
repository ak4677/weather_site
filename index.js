var inputvalue=document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik='5f648a2be654a0721070e8e35077ed2d'
function tempchange(val){
    return (val-273).toFixed(2)
}
 btn.addEventListener('click',function() 
    {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
        .then(res=>res.json())
        .then(data=> 
            {
                var nameval=data['name']
                var descrip=data['weather']['0']['description']
                var tempature=data['main']['temp']
                var wndspeed=data['wind']['speed']

                city.innerHTML=`weather of <span>${nameval}<span>`
                temp.innerHTML=`temperature: <span>${tempchange(tempature)}<span>℃ `
                description.innerHTML=`sky conditions: <span>${descrip}<span>`
                wind.innerHTML=`wind speed: <span>${wndspeed}<span> km/h`

            })
            .catch(err=> alert('you enter wrong city name'))
    })