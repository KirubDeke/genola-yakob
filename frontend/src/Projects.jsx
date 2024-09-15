import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style/projects.css';
import img1 from './assets/bulding.jpg';
function Projects() {
    return (
      <>
      <div className='section-projects'>
      <h1 className='heading-projects'>Projects</h1>
        <div className="project-card-container">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img1} alt='image'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='project-read-more'>See More</Button>
            </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} alt='image'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='project-read-more'>See More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} alt='image'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='project-read-more'>See More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} alt='image'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='project-read-more'>See More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} alt='image'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='project-read-more'>See More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} alt='image'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className='project-read-more'>See More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='separate-button'>
          <Button variant="primary" className='project-see-all'>View More</Button>
        </div>
      </div>
       
      </>
    );
  }

export default Projects;