// async-await is nicer and cleaner way to handle promise.


// when we have a fn that returns promise,
function getWeather(){
  // return new Promise(...)
}

// we can handle the promise with a then and a catch block

getWeather()
.then(()=> {
  //do somethng
})
.catch(()=>{
  //do something
})