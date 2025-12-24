import React from 'react'
import { Container } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <Container className="align-item-center">
            <div className="social-icon social-footer">
                <a href="https://www.linkedin.com/in/aarenpan/" target="_blank" rel="noreferrer">
                    <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.github.com/dark-ap1015" target="_blank" rel="noreferrer">
                    <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/aarenpan/" target="_blank" rel="noreferrer">
                    <img src={navIcon3} alt="Instagram" />
                </a>
            </div>
            <p>&copy; 2025 Aaren Pan. All rights reserved.</p>
        </Container>
    </footer>
  )
}

export default Footer