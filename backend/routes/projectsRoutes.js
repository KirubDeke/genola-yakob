const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');
const path = require('path');


//get all projects
router.get('/api/projects', projectsController.getAllProjects);
//get a single project
router.get('/api/project/:id', projectsController.getSingleProject);
//post a project
router.post('/api/postproject', projectsController.createProjectsWithUpload);
// Get a store's photo
router.get('/api/project/:id/photo', projectsController.getProjectPhoto);
//
router.get('/images/:filename', (req, res) => {
    const { filename } = req.params;
    const imagePath = path.join(__dirname, '..', 'images', filename);
    res.sendFile(imagePath);
  });
//delete project
router.delete('/api/deleteProject/:id', projectsController.deleteProject);

module.exports = router;