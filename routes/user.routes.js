const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.post('/adduser', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('/getalluser', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.get('/getuser/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  });
  router.delete('/deleteuser/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  });
  router.put('/updateuser/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  });
module.exports = router;
