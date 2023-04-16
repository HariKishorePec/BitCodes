
//every fn in js has to return somthing. //even it is undefined.

function getWeather(){
  return 'sunny'
}

console.log(getWeather())

// but sometime the fn doesn't have the thing that needs to be returned.
// like, it has to call an API to get weather first.

// so we cant do this.
function getWeather1(){
  const weather = callAPI() // bcoz, callAPI will take some time. is asynchronous
  return weather
}

console.log(getWeather1())
