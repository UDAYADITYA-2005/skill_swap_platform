const router = require('express').Router();
const User = require('../models/User');

router.get('/public', async (req, res) => {
  const users = await User.find({ publicProfile: true });
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

module.exports = router;