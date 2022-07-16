import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './styleHome.css';

export default class Home extends Component {
  render() {
    const imgSrc = 'https://github.com/DanubioRafa/imagesToPortfolio/blob/main/image2.png?raw=true';
    return (
      <main>
        <div className='welcomeText'>
          <h3>Seja bem-vindo ao meu Portfolio</h3>
          <p>Desenvolvedor Web FullStack</p>
        </div>
        <div>
          <img src={imgSrc} alt="Ilustração" />
        </div>
        <div className='Button'>
          <Link to="/projects">Conhecer projetos</Link>
        </div>
      </main>
    )
  }
}
