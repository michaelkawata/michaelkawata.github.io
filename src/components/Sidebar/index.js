import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoM from '../../assets/images/logo-m1.png'
import LogoName from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faNewspaper, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoM} alt="logo" />
        <img className="sub-logo" src={LogoName} alt="michael" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          activateclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#ffffff" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true" activateclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#ffffff" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activateclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faSuitcase} color="#ffffff" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activateclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          className="close-icon"
          onClick={() => setShowNav(false)}
          color="#ffffff"
          size="3x"

        />
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/michael-kawata-71a59a241/'>
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/michaelkawata'>
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://michaelkawataresume.tiiny.site/'>
            <FontAwesomeIcon icon={faNewspaper} color="#ffffff" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffffff"
        size="3x"
        className='hamburger-icon'
      />
    </div>
  )
}

export default Sidebar