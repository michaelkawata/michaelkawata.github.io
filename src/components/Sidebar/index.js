import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoM from '../../assets/images/logo-m1.png'
import LogoName from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt="logo" />
            <img className="sub-logo" src={LogoName} alt="michael" />
        </Link>
        <nav>
            <NavLink exact="true" activateclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#ffffff" />
            </NavLink>
            <NavLink exact="true" activateclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#ffffff" />
            </NavLink>
            <NavLink exact="true" activateclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/michael-kawata-71a59a241/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/kawatakoala'>
                    <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar