const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all the Users
router.get('/', async(req, res) => {
  try {
    const users = await User.find().populate('user').populate('address');
    res.json(users);
  } catch(err) {
    res.json({message: err});
  }
});

// Add a User
router.post('/', async(req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  try {
    const saveUser = await user.save()
    res.json(saveUser);
  } catch(err) {
    res.json({message: err});
  }
});

// List a Specific User
router.get('/:userId', async(req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch(err) {
    res.json({message: err});
  }
});

// Delete a User
router.delete('/:userId', async(req, res) => {
  try {
    const deleteUser = await User.remove({_id: req.params.userId});
    res.json(deleteUser);
  } catch(err) {
    res.json({message: err});
  }
});

// Update a User
router.patch('/:userId', async (req, res) => {
  try {
    const updateUser = await User.updateOne({_id: req.params.userId},
      {$set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName
       }
     });
    res.json(updateUser);
  } catch(err) {
    res.json({message: err});
  }
});

module.exports = router;
