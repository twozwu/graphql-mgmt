// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['new', 'progress', 'completed'],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

// module.exports = mongoose.model('Project', ProjectSchema);
export default mongoose.model('Project', ProjectSchema);
