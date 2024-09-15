import img from './assets/building.png';
import './style/transition.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faClock, faDesktop, faPenRuler } from '@fortawesome/free-solid-svg-icons';

function Transition() {
    return (
        <>
            <div className='section-transition'>
                <div className='section-transition-part1'>
                    <h3 className='heading-transition'>We Follow Best Practices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor
                         explicabo placeat ipsa totam facere iste adipisci 
                        similique, cupiditate aperiam magni. Laudantium doloribus 
                        voluptate deleniti tempora natus? Dignissimos, illo reiciendis.</p>
                        <ul className='list'>
                           <li>
                              <span className='icon'><FontAwesomeIcon icon={faRecycle} style={{ color: "#333" }} size="1x" /></span>Sustainability
                          </li>
                        <li>
                             <span className='icon'><FontAwesomeIcon icon={faClock} style={{ color: "#333" }} size="1x" /></span>Project On Time
                        </li>
                         <li>
                        <span className='icon'><FontAwesomeIcon icon={faDesktop} style={{ color: "#333" }} size="1x" /></span>Modern Technology
                        </li>
                        <li>
                       <span className='icon'><FontAwesomeIcon icon={faPenRuler} style={{ color: "#333" }} size="1x" /></span>Latest Design
                       </li>
                    </ul>
                </div>
                <div className='section-part2'>
                    <img src={img} alt='image' />
                </div>
            </div>
        </>
    );
}

export default Transition;