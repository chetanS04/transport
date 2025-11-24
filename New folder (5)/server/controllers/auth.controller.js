"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/auth.config");
const { User } = require("../models");
const asyncHandler = require("../middlewares/asyncHandler");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Email & Password are required." });
  }

  const user = await User.findOne({
    where: { email },
    paranoid: true,
  });

  if (!user) {
    return res.status(404).send({ message: "User not found." });
  }

  if (!user.status) {
    return res.status(403).send({ message: "Your account is disabled." });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({ message: "Invalid password!" });
  }

  if (user.role !== "ADMIN") {
    return res.status(403).send({
      message: "You do not have permission to access this application.",
    });
  }

  const token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: "24h",
    algorithm: "HS256",
  });

  return res.status(200).send({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    accessToken: token,
  });
});

const logout = asyncHandler(async (req, res) => {
  req.session = null;

  return res.status(200).send({ message: "You've been logged out!" });
});

module.exports = {
  login,
  logout,
};
