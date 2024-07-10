const axios = require('axios');
const { User } = require('../models');

const getUserFromGitHub = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

exports.saveUser = async (req, res) => {
  const { username } = req.body;

  try {
    let user = await User.findOne({ where: { username } });

    if (!user) {
      const details = await getUserFromGitHub(username);
      user = await User.create({ username, details });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchUsers = async (req, res) => {
  const { query } = req.body;

  try {
    const users = await User.findAll({
      where: {
        ...query,
        deletedAt: null,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { username, updates } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (user) {
      await user.update({ details: { ...user.details, ...updates } });
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.softDeleteUser = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'User soft deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  const { sortBy } = req.query;

  try {
    const users = await User.findAll({
      order: [[sortBy, 'ASC']],
      where: { deletedAt: null },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
