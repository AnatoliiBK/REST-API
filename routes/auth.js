const express = require("express");
const ctrl = require("../controllers/auth");
const { validateBody, authenticate, upload } = require("../middlewares");
const schemas = require("../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.authSchema), ctrl.register);

router.post("/login", validateBody(schemas.authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

router.post("/avatars", upload.single("avatar"), ctrl.giveStaticImg);

router.get("/verify/:verificationToken", ctrl.verify);

router.post(
  "/verify/",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

module.exports = router;
