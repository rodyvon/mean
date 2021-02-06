const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
  //user : { type: ObjectId, ref: 'User' },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postalCode: {
    type: String
  }
});

module.exports = mongoose.model('Addresses', AddressSchema);
