const projects = require('../modules/projectsModules');
const multer = require('multer'); // Fixed 'mutler' to 'multer'
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
let project = [];

const projectStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Corrected the typo here
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// Ensure to use 'fileFilter' instead of 'projects'
const upload = multer({ storage: projectStorage, fileFilter });

// Get all projects
const getAllProjects = async (req, res) => {
    try {
        const projectsList = await projects.find().sort({ createdAt: -1 });
        res.json(projectsList);
    } catch (error) {
        console.error('Error retrieving projects: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a single project
const getSingleProject = async (req, res) => {
    try {
        const { id } = req.params;
        const projectData = await projects.findById(id);

        if (!projectData) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(projectData);
    } catch (error) {
        console.error('Error retrieving project:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a project
const createProject = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const { title, snippet, description } = req.body;
        const photo = req.file ? req.file.filename : null;

        const newProject = await projects.create({ title, snippet, description, photo }); // Added photo to the creation
        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error creating new project:', error);
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

const createProjectsWithUpload = [
    upload.single('photo'),
    createProject
];

const getProjectPhoto = (req, res) => {
    const { id } = req.params;
    const photoPath = path.join(__dirname, '..', 'images', `${id}.png`);

    if (fs.existsSync(photoPath)) {
        res.sendFile(photoPath);
    } else {
        res.status(404).send('Photo not found');
    }
};

// Delete project
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await projects.findOneAndDelete({ _id: id }); // Fixed 'store' to 'projects'
        if (!result) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAllProjects,
    getSingleProject,
    createProjectsWithUpload,
    getProjectPhoto,
    deleteProject,
};