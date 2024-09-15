import './style/service.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHouse,  faCompassDrafting, faTruck, 
    faFileContract, faPenRuler, faPersonDigging, faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FooterSection } from './FooterSection';
import image from './assets/pic-5.jpg';

function Services() {
    return (
        <>
        <div className='service-page-container'>
        <div className='container-projects'>
                <img src={image} alt='image' className="fluidproject" />
                <div className='top-half'>
                    <div className='top-half-content'>
                        <h1 className='heading-projects'>Services</h1>
                    </div>
                </div>
            </div>
            <div className='section-services'>
                <div className="card-container">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                            <FontAwesomeIcon icon={faBuilding} style={{color: "#333"}} size="3x" />
                            </div>
                            <Card.Title>Building Construction</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                            <FontAwesomeIcon icon={faHouse} style={{color: "#333"}} size="3x" />
                            </div>
                            <Card.Title>House Renovation</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                            <FontAwesomeIcon icon={faCompassDrafting} style={{color: "#333"}} size="3x" />
                            </div>
                            <Card.Title>Architectural Design</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                            <FontAwesomeIcon icon={faTruck} style={{color: "#333"}} size="3x" />
                            </div>
                            <Card.Title>Material Supply</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faFileContract}style={{color: "#333"}} size="3x" />
                            </div>
                            <Card.Title>Construction Consultant</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faPenRuler} style={{color: "#333"}} size="3x" />
                            </div>
                            <Card.Title>Interior Design</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faPersonDigging} style={{color: "#333"}}  size="3x" />
                            </div>
                            <Card.Title>Building Material</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faHouseCircleCheck} style={{color: "#333"}} size="3x" />
                            </div>
                            <Card.Title>Building Renovation</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    
                </div>
            </div>
            <FooterSection/>
        </div>
            
        </>
    );
}

export default Services;