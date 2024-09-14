const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  name: String,
  slots: [{ type: String }], // Example slots
});

module.exports = mongoose.model('Provider', ProviderSchema);
