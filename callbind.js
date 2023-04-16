
// const person = {
//   firstName: 'john',
//   lastName: 'doe',
//   fullName: function(){
//     return this.firstName+" "+this.lastName
//   }
// }

// console.log('fullname: ', person.fullName())

const person = {
  fullName:  function(){
    return this.firstName + " "+ this.lastName
  }
}

const person1 = {
  firstName: 'john',
  lastName: 'doe'
}

const person2 = {
  firstName: 'john2',
  lastName: 'doe2'
}

console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2))