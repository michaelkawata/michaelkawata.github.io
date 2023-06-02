import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-m1.png'
import './index.scss'
import Logo from './Logo';
import Loader from 'react-loaders';
import Lottie from './Lottie';

const Home = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	const nameArray = ['i', 'c', 'h', 'a', 'e', 'l']
	const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	return (
		<>
			<div>
				<Lottie />
			</div>
			<div className="container home-page">
				<div className="text-zone">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i</span>
						<span className={`${letterClass} _13`}>,</span>
						<br />
						<span className={`${letterClass} _14`}>I</span>
						<span className={`${letterClass} _15`}>'</span>
						<span className={`${letterClass} _16`}>m</span>
						<img
							src={LogoTitle}
							alt="JavaScript Developer Name, Web Developer Name"
						/>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={nameArray}
							idx={15}
						/>
						<br />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={jobArray}
							idx={22}
						/>
					</h1>
					<h2>Full-stack Developer</h2>
					<Link to="/contact" className='flat-button'>
						CONTACT ME
					</Link>
				</div>
				<Logo />
			</div>
			<Loader type="line-scale" />
		</>
	);
}

export default Home