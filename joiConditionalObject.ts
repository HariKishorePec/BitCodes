
import * as Joi from 'joi'

export class Contact {
  name: string
  preferred_method: string
  email: string
  telephone: string

  static validationSchema = Joi.object({
    name: Joi.string().required(),
    preferred_method: Joi.string().required().valid('Email', 'Telephone'),
    email: Joi.string(),
    telephone: Joi.string()
  })

  static validationSchema2 = Joi.object({
    name: Joi.string().required(),
    preferred_method: Joi.string().required().valid('Email', 'Telephone'),
    email: Joi.string().when('preferred_method', { is: 'Email', then: Joi.required()}),
    telephone: Joi.string().when('preferred_method', { is: 'Telephone', then: Joi.required()})
  })

}


// we want to change the validation rule for email and telephone field based on,,
/// based on the value of preferred_method field.