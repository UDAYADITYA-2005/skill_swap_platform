const router = require('express').Router();
const Swap = require('../models/Swap');

router.post('/', async (req, res) => {
  const swap = await Swap.create(req.body);
  res.status(201).json(swap);
});

router.get('/:userId', async (req, res) => {
  const swaps = await Swap.find({ $or: [ { sender: req.params.userId }, { receiver: req.params.userId } ] });
  res.json(swaps);
});

router.put('/:id', async (req, res) => {
  const swap = await Swap.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(swap);
});

router.delete('/:id', async (req, res) => {
  await Swap.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
