
let name1 = "hari"
console.log(this) //{}       // if its browser window - its going to be window object

console.log(this.name1) //undefined

//2 - if inside a function in an object

const person = {
   sayHi : function (){
    console.log('hi')
    console.log(this)
  },
  sayHello(){
    console.log('sayHello')
  }
}

// console.log(person)
// console.log(person.sayHi())

person.sayHi()     //this -- whoever invoking it.

//3 - if inside function but not inside object

function talk(){
  console.log(this)
}

// talk()  // this - is  Object [global]. 

let me = {
  name: 'hari'
}
talk.call(me)   //this inside talk() - is 'me'

//4 - if inside a constructor fn, - its always the object being created with 'new' keywords

function Person1 (){
  console.log(this)
}

let p3 = new Person1()

function Person (n){
  this.name = n
  console.log(this)
}

let p1 = new Person('me1')
let p2 = new Person('me2')

//5 if there is callback inside another fn