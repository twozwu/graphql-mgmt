// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

// module.exports = mongoose.model('Client', ClientSchema);
export default mongoose.model('Client', ClientSchema);
