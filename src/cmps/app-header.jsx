import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import whatsapp from "../assets/img/whatsapp.png"
import whatsapp2 from "../assets/img/whatsapp2.png"
import phoneCall from "../assets/img/phone-call.png"
import Instagram from "../cmps/svg/instagram"
// import mainLogo from "../assets/img/logo/high-res/logo-transparent-new.png"
import logoIcon from "../assets/logo-transparent-removebg-preview.png"
import mainLogo from "../assets/logo-dor.png"

export function AppHeader() {
  const [isHomeActive, setIsHomeActive] = useState(false)
  const [isProjectsActive, setProjectsIsActive] = useState(false)
  const [isAboutActive, setAboutIsActive] = useState(false)
  const [isPricesActive, setIsPricesActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const onHome = () => {
    navigate("/")
  }

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  const iBtnActive = (btn) => {
    switch (btn) {
      case 'home':
        setIsHomeActive(true)
        setProjectsIsActive(false)
        setAboutIsActive(false)
        break;
      case 'projects':
        setProjectsIsActive(true)
        setAboutIsActive(false)
        setIsHomeActive(false)
        break;
      case 'about':
        setAboutIsActive(true)
        setProjectsIsActive(false)
        setIsHomeActive(false)
        break;
      case 'prices':
        setAboutIsActive(false)
        setProjectsIsActive(false)
        setIsHomeActive(false)
        setIsPricesActive(true)
        break;
      default:
        break;
    }
  }
  return (<>
    <header className='app-header full'>
      <div className="main-logo" onClick={() => {
        iBtnActive('home')
        onHome()
      }}>
        <img className='logo-icon' src={logoIcon} alt="Loading..." />
        <img src={mainLogo} alt="Loading..." />
      </div>
      <div className={`nav-bar-container ${isOpen ? 'open' : ''}`}>
        <NavLink onClick={() => {
          iBtnActive('home');
          return toggleNavBar()
        }} to='/' className={`nav-home ${isHomeActive ? 'isActive' : ''}`}> <span>עמוד הבית</span></NavLink>
        <NavLink onClick={() => {
          iBtnActive('prices');
          return toggleNavBar()
        }} className='' to='/prices'><span>עמוד המחירים</span></NavLink>

        <a className='link-same-page' href='#about' onClick={() => {
          return toggleNavBar()
        }}>אודות</a>
        <a className='link-same-page' href='#projects' onClick={() => {
          return toggleNavBar()
        }}>התהליכים שלנו</a>

      </div>
      <div className={`links-container`}>
        <a href="https://wa.link/4o3lvw"><img src={whatsapp} alt="Loading..." /></a>
        <a className="phone-call" href="tel:0522249646"><img src={phoneCall} alt="Loading..." /></a>
        <a className="Instagram" href="https://www.instagram.com/dor_erlichson_/"><Instagram /></a>
        <button className="toggle-nav" onClick={toggleNavBar}>☰</button>
      </div>
    </header>

  </>
  );
}