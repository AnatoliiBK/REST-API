// const Joi = require("joi");

// const contacts = require("../models/contacts");

// const { HttpError } = require("../helpers");

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().required(),
// });

// const listContacts = async (req, res, next) => {
//     try {
//       // res.json({ message: 'template message' })
//       const result = await contacts.listContacts();
//       res.json(result);
//     } catch (error) {
//       // res.status(500).json({ message: "Server error" });
//       next(error);
//     }
//   }

//   module.exports = {
//     listContacts
//   }