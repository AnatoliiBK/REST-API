const Joi = require("joi");

const contacts = require("../models/contacts");

const { HttpError } = require("../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const listContacts = async (req, res, next) => {
    try {
      // res.json({ message: 'template message' })
      const result = await contacts.listContacts();
      res.json(result);
    } catch (error) {
      // res.status(500).json({ message: "Server error" });
      next(error);
    }
  }

  const getContactById = async (req, res, next) => {
    // res.json({ message: "template message" });
    // console.log(req.params)
    try {
      const { contactId } = req.params;
      const result = await contacts.getContactById(contactId);
      if (!result) {
        throw HttpError(404, "Not found");
        // const error = new Error('Not found');
        // error.status = 404;
        // throw error;
        // return res.status(404).json({ message: "Not found" });
      }
      res.json(result);
    } catch (error) {
      // const { status = 500, message = "Server Error" } = error;
      // res.status(status).json({ message });
      next(error);
    }
  }

  const addContact = async (req, res, next) => {
    // res.json({ message: "template message" });
    try {
      const { error } = addSchema.validate(req.body);
      if (error) {
        throw HttpError(400, error.message);
      }
      const result = await contacts.addContact(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  const removeContact = async (req, res, next) => {
    // res.json({ message: "template message" });
    try {
      const { contactId } = req.params;
      const result = await contacts.removeContact(contactId);
      if (!result) {
        throw HttpError(404, "Not found");
      }
      res.json({
        message: "Delete success",
      });
    } catch (error) {
      next(error);
    }
  }

  const updateContact = async (req, res, next) => {
    try {
      const { error } = addSchema.validate(req.body);
      if (error) {
        throw HttpError(400, error.message);
      }
  
      const { contactId } = req.params;
      const result = await contacts.updateContact(contactId, req.body);
      if (!result) {
        throw HttpError(404, "Not found");
      }
      res.json(result);
    } catch (error) {
      next(error);
    }
    // res.json({ message: "template message" });
  }

  module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact
  }