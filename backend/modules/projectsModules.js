const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
      title:{
        type: String,
        required: true
      },
      snippet:{
        type: String,
        required: true
      },
      description:{
        type: String,
        required: true
      },
      photo:{
        type: String,
        required: false
      },
      createdAt:{
        type: Date,
        default: Date.now
      },
      updatedAt:{
        type: Date,
        default: Date.now
      }
});
module.exports = mongoose.model('projects', ProjectsSchema);