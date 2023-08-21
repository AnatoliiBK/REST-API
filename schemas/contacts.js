// const Joi = require('joi');


// const addSchema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().email().required(),
//     phone: Joi.string().required(),
//   });

//   module.exports = {
//     addSchema
//   }

const Joi = require('joi');

const addSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'missing required name field'
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'missing required email field'
    }),
    phone: Joi.string().required().messages({
        'any.required': 'missing required phone field'
    })
  });

  module.exports = {
    addSchema
  }
