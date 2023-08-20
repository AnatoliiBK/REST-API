const express = require("express");

// const Joi = require("joi");

const router = express.Router();
const ctrl = require('../../controllers/contacts')
// const contacts = require("../../models/contacts");

// const { HttpError } = require("../../helpers");

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().required(),
// });

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", ctrl.updateContact);

module.exports = router;
