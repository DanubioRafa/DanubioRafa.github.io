import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styleHome.css';

export default class Home extends Component {
  render() {
    const imgSrc = 'https://github.com/DanubioRafa/imagesToPortfolio/blob/main/image2.png?raw=true';
    return (
      <main className="main-home">
        <div>
          <h3 className='welcomeText'>Seja bem-vindo ao meu Portfolio</h3>
          <p className='welcomeText'>Desenvolvedor Web FullStack</p>
          <Link className="link-projects" id="link-welcome" to="/projects">Conhecer projetos</Link>
        </div>
        <div>
          <img src={imgSrc} alt="Ilustração" />
        </div>
          <Link className="link-projects" to="/projects">Conhecer projetos</Link>
      </main>
    )
  }
}
