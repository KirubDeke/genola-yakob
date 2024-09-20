import React, { useEffect, useState } from 'react';
import './style/projectpage.css';
import image from './assets/pic-5.jpg';
import imagetwo from './assets/genola&yakob.png';
import axios from 'axios';
import { FooterSection } from './FooterSection';

function ProjectPage() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://seversidegandy.onrender.com/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <div className='projects-page-container'>
                <div className='container-projects'>
                    <img src={image} alt='image' className="fluidproject" />
                    <div className='top-half'>
                        <div className='top-half-content'>
                            <h1 className='heading-projects'>Projects</h1>
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <img src={imagetwo} alt='image' className="fluidproject2" />
                    <div className='main-content'>
                        Welcome to our projects page! Here, we showcase the diverse range of projects we've undertaken,
                        highlighting our commitment to quality, innovation, and sustainability. Each project reflects 
                        our passion for excellence and our dedication to meeting the needs of our clients and communities.
                    </div>
                </div>
                <h1 className='projects-list-heading'>Our Projects</h1>
                <div className='projects-list'>
                    {projects.map((project, index) => (
                        <div key={index} className='project-card'>
                            {project.photo ? (
                                <img src={`https://seversidegandy.onrender.com/images/${project.photo}`} alt={project.title} />
                            ) : (
                                <p>No image available</p>
                            )}
                            <h3>{project.title}</h3>
                            <p>{project.snippet}</p>
                            <button className='project-button' onClick={() => openModal(project)}>View Details</button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <button className='close-button' onClick={closeModal}>X</button>
                        {selectedProject && (
                            <>
                                <h2>{selectedProject.title}</h2>
                                {selectedProject.photo && (
                                    <img src={`https://seversidegandy.onrender.com/images/${selectedProject.photo}`} alt={selectedProject.title} />
                                )}
                                <p>{selectedProject.description}</p>
                            </>
                        )}
                    </div>
                </div>
            )}
            <FooterSection/>
        </>
    );
}

export default ProjectPage;
