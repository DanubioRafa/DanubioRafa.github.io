import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styleHeader.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h2><span id='firstName'>Danubio</span> Rafael</h2>
        <nav>
          <Link to='/'>Início</Link>
          <Link to='/about'>Sobre</Link>
          <Link to='/projects'>Projetos</Link>
        </nav>
      </header>
    )
  }
}
