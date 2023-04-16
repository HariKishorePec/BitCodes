
const Joi = require('joi')

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).max(12).required()
})

try {
   
  console.log(schema.validate({}))

  console.log(schema.validate({username: 'hari'}))
  console.log(schema.validate({username: 'hari', password: 'kishore1234'}))
} catch (error) {
  console.log(error)
}
