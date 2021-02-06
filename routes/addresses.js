const express = require('express');
const router = express.Router();
const Address = require('../models/Address');

// Get all the Address
router.get('/', async(req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch(err) {
    res.json({message: err});
  }
});

// Add an Address
router.post('/', async(req, res) => {
  const address = new Address({
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    postalCode: req.body.postalCode
  });
  try {
    const saveAddress = await address.save()
    res.json(saveAddress);
  } catch(err) {
    res.json({message: err});
  }
});

// List a Specific Address
router.get('/:addressId', async(req, res) => {
  try {
    const address = await Address.findById(req.params.addressId);
    res.json(address);
  } catch(err) {
    res.json({message: err});
  }
});

// Delete an Address
router.delete('/:addressId', async(req, res) => {
  try {
    const deleteAddress = await Address.remove({_id: req.params.addressId});
    res.json(deleteAddress);
  } catch(err) {
    res.json({message: err});
  }
});

// Update an Address
router.patch('/:addressId', async (req, res) => {
  try {
    const updateAddress = await Address.updateOne({_id: req.params.addressId},
      {$set: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode
       }
     });
    res.json(updateAddress);
  } catch(err) {
    res.json({message: err});
  }
});

module.exports = router;
