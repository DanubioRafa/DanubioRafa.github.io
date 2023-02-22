import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import illustration from '../../assets/header-img.svg'
import './styleHome.css';

export default class Home extends Component {
  render() {
    const imgSrc = 'https://github.com/DanubioRafa/imagesToPortfolio/blob/main/image2.png?raw=true';
    return (
      <main className="main-home">
        <div className='welcome-container'>
          <h3 className='welcome-text'>Seja bem-vindo ao meu Portfolio</h3>
          <p className='sub-welcome-text'>Desenvolvedor Web FullStack</p>
          <Link className="link-projects" id="link-welcome" to="/projects">Conhecer projetos</Link>
        </div>
        <div>
          <img src={illustration} alt="Ilustração" className='illustration' />
        </div>
          <Link className="link-projects" to="/projects">Conhecer projetos</Link>
      </main>
    )
  }
}
