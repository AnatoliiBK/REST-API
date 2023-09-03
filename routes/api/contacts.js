const express = require("express");
const { validateBody, isValidId, validateStatus, authenticate  } = require('../../middlewares');

const { schemas } = require("../../models/contact");
const router = express.Router();
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

router.put("/:contactId", authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", authenticate, isValidId, validateStatus(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
