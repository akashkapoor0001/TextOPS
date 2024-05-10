import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode === 'light'?'black':'light'}`} href="#">
    {/* <img src="text-utils\public\TextOps.png" color='white' alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/> */}
    <img src={`${process.env.PUBLIC_URL}/TextOps.png`} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
      <b>{props.title}</b>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link text-${props.mode === 'light'?'black':'light'}`}  href="#home" active={true.toString()}>{props.Home}</a>
          {/* <Link className={`nav-link text-${props.mode === 'light'?'black':'light'}`}  to="/home" active={true.toString()}>{props.Home}</Link> */}
        </li>
        {/* <li className="nav-item">
            <div className="tooltip-container">
              <Link className={`nav-link text-${props.mode === 'light'?'black':'light'}`} to="/about" active={true.toString()}>
                {props.AboutTextOps}
              </Link>
              <div className={`tooltip ${props.mode === 'light'?'black':'light'}`}>
                <h2>Welcome to TextUtils</h2>
                <p>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or converting your text into upper case or lower case, TextUtils is here for all your needs. Best of all, it's free!</p>
              </div>
            </div>
        </li> */}
        <li className="nav-item">
          {/* <Link className={`nav-link text-${props.mode === 'light'?'black':'light'}`} to="/contact" active={true.toString()}>{props.ContactInfo}</Link> */}
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link text-${props.mode === 'light'?'black':'light'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.DropdownInfo}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex">
        <form className="d-flex me-2" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-danger" type="submit">{props.SearchBar}</button>
        </form>
        <div className={`form-check form-switch text-${props.mode === 'light'?'black':'light'}`}>
          <input className="form-check-input my-2" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label my-1" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>

  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired,
  AboutTextutils: PropTypes.string.isRequired,
  ContactInfo: PropTypes.string.isRequired,
  DropdownInfo: PropTypes.string.isRequired,
  SearchBar: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  logo : "Set logo here",
  title: "Set title here",
  Home: "Home",
  AboutTextutils: "About",
  ContactInfo: "Contact",
  DropdownInfo: "Dropdown",
  SearchBar: "Search"
}
