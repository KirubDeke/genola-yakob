import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './style/addProjects.css';
import img from './assets/genola&yakob.png';
import { FaTrashAlt } from 'react-icons/fa';

function AddProjects() {
    const [title, setTitle] = useState('');
    const [snippet, setSnippet] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [projects, setProjects] = useState([]); 
    const photoInputRef = useRef(null); // Create a ref for the photo input

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('snippet', snippet);
        formData.append('description', description);
        formData.append('photo', photo);

        try {
            await axios.post('https://genola-yakobbackend.onrender.com/api/postproject', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setTitle('');
            setSnippet('');
            setDescription('');
            setPhoto(null);
            if (photoInputRef.current) {
                photoInputRef.current.value = ''; // Clear the file input
            }
            fetchProjects(); 
        } catch (error) {
            console.error('Error saving project:', error);
        }
    };

    const handleDeleteProject = async (id) => {
        try {
            if (window.confirm('Are you sure you want to delete this project?')) {
                await axios.delete(`https://genola-yakobbackend.onrender.com/api/deleteProject/${id}`);
                setProjects(projects.filter((project) => project._id !== id));
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await axios.get('https://genola-yakobbackend.onrender.com/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <><div className='add-project-container'>
            <div className="add-store-container">
                <img src={img} alt="image" className="add-store-image" />
                <form onSubmit={handleSubmit} className="add-store-form">
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="snippet">Snippet:</label>
                        <input
                            type="text"
                            id="snippet"
                            value={snippet}
                            onChange={(e) => setSnippet(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="photo">Photo:</label>
                        <input
                            type="file"
                            id="photo"
                            ref={photoInputRef} // Attach the ref here
                            onChange={handlePhotoChange}
                            required
                        />
                    </div>
                    <button type="submit">Add Project</button>
                </form>
            </div>
            <div className="store-list-container">
                <div className="store-list-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="store-card">
                            {project.photo ? (
                                <img
                                    src={`https://genola-yakobbackend.onrender.com/images/${project.photo}`}
                                    alt={project.title}
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                            <h3>{project.title}</h3>
                            <p>{project.snippet}</p>
                            <p>{project.description}</p>
                            <div
                                className="delete-icon"
                                onClick={() => handleDeleteProject(project._id)}
                            >
                                <FaTrashAlt />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
}

export default AddProjects;
