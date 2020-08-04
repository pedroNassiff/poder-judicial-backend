const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const UserTracker = db.userTracker;

exports.allAccess = async (req, res) => {
  const users = await User.find().populate("roles", "-__v");
  res.status(200).send(users);
};

exports.getActivity = async (req, res) => {
  const users = await UserTracker.find().sort({ _id: -1 }).limit(10).populate("createdBy", "-__v");;
  res.status(200).send(users);
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
