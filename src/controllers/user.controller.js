const service = require('../services/user.service');

exports.create = async (req, res) => {
  const { name, email } = req.body;
  const user = await service.createUser(name, email);
  res.json(user);
};

exports.findAll = async (req, res) => {
  const users = await service.getUsers();
  res.json(users);
};

exports.findOne = async (req, res) => {
  const user = await service.getUserById(req.params.id);
  res.json(user);
};

exports.update = async (req, res) => {
  const { name, email } = req.body;
  const user = await service.updateUser(req.params.id, name, email);
  res.json(user);
};

exports.remove = async (req, res) => {
  await service.deleteUser(req.params.id);
  res.json({ message: "User deleted" });
};