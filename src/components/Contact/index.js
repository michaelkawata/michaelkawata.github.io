import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_5ruj4em',
                'contact_form',
                refForm.current,
                '4KGw6Ksr-22Z-TIrW'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        {/* Hello,
                        <br></br>Thank you for visiting my website. I would love to hear from you
                        and discuss how I can help bring your web development projects to life.
                        Whether you need a new website, a redesign, or assistance with front-end
                        or back-end development, I am here to assist you. */}
                        <hr></hr>
                        Please feel free to reach out to me using the contact form below.
                        I will respond to your message as soon as possible. Let's collaborate
                        and create something amazing together!
                        <hr></hr>
                        Best regards,
                        <br></br>
                        Michael
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Michael Kawata
                    <br />
                    United States
                    <br />
                    West Los Angeles
                    <br />
                    <span>mikeykawata@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[34.036023, -118.412415]} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[34.036023, -118.412415]}>
                            <Popup>
                                Michael lives here.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="line-scale" />
        </>
    )
}

export default Contact