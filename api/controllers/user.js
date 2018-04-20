const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });

  user
    .save()
    .then(response => {
      res.status(200).json({ msg: "Account created successfully." });
    })
    .catch(err => {
      res.status(500).json(err);
    })
};

module.exports = {
  createUser
};
