import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'
import '../assets/css/NavBar.css'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const updateActiveLink = (link) => {
        setActiveLink(link)
        setExpanded(false)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={expanded}>
            <Container>
                <Navbar.Brand href="#home" className="brand" onClick={() => updateActiveLink('home')}>AP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/aarenpan" target="_blank" rel="noreferrer">
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/dark-ap1015" target="_blank" rel="noreferrer">
                                <img src={navIcon2} alt="GitHub" />
                            </a>
                            <a href="https://gitlab.com/dark-ap1015" target="_blank" rel="noreferrer">
                                <img src={navIcon4} alt="GitLab" />
                            </a>
                            <a href="https://www.instagram.com/aarenpan/" target="_blank" rel="noreferrer">
                                <img src={navIcon3} alt="Instagram" />
                            </a>
                        </div>
                        <div className="button-container">
                            <a className="contact button-link" href="#contact" onClick={() => updateActiveLink('contact')}>
                                <span>Contact</span>
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar