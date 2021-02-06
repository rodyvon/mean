const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  //_id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  //addresses: [{ type: AddressSchema.Types.ObjectId, ref: 'Address' }]
});

module.exports = mongoose.model('Users', UserSchema);
