const joi = require('joi')

const nameSchema = joi.string().min(5)
let name = "hari"

// console.log(nameSchema.validate(name))
/* {
  value: 'hari',
  error: [Error [ValidationError]: "value" length must be at least 5 characters long] {
    _original: 'hari',
    details: [ [Object] ]
  }
} */

let { value, error} = nameSchema.validate(name)
if (error) {
  console.log('Error while validation: ')
  console.log('error message: ', error.details[0].message)
  console.log("provided data: ", error._original)
} else {
  console.log("valid data: ", value)
}