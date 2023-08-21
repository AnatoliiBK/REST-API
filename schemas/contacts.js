const Joi = require('joi');

const customMessages = {
    'any.required': 'missing required {#label} field'
};

const addSchema = Joi.object({
    name: Joi.string().required().messages(customMessages),
    email: Joi.string().email().required().messages(customMessages),
    phone: Joi.string().required().messages(customMessages)
});

module.exports = {
    addSchema
};
