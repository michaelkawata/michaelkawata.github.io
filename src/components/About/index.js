import { useEffect, useState } from 'react'
import {
    faCss3,
    faGithub,
    faHtml5,
    faJs,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Highly motivated and detail-oriented individual seeking an entry-level software
                        developer position to kickstart a career in the software development industry.
                        with a willingness to learn new technologies in a professional setting.
                    </p>
                    <p align="LEFT">
                        Eager to apply strong problem-solving and analytical skills acquired through coursework and
                        personal projects. Excellent communication and teamwork abilities developed
                        through group projects and collaborative assignments.
                    </p>
                    <p>
                        If I were to define myself in one sentence that would be a family
                        person, car enthusiast, anime fanatic, and tech-obsessed!!!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faJs} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="line-scale" />
        </>
    )
}

export default About