import React, { Component } from 'react'
import './styleAbout.css';
import jsIcon from '../assets/js-icon.png'
import htmlIcon from '../assets/html-icon.png'
import cssIcon from '../assets/css-icon.png'
import reactIcon from '../assets/react-icon.png'
import jestIcon from '../assets/jest-icon.png'
import tsIcon from '../assets/ts-icon.png'
import pythonIcon from '../assets/python-icon.png'
import nodeIcon from '../assets/node-icon.png'
import gitIcon from '../assets/git-icon.png'
import mongoIcon from '../assets/mongo-icon.png'
import mysqlIcon from '../assets/mysql-icon.png'

export default class About extends Component {
  render() {
    return (
      <main className='main-about'>
        <section className='about-me'>
        <h3>Sobre Mim</h3>
        <p>Me chamo Rafael, tenho 20 anos. Nasci em Fortaleza, capital do Ceará. Atualmente moro em Canindé, Ceará.</p>
        <p>Aos meus atuais 20 anos de idade, percebi durante o meu trajeto <br />
         no curso de tecnologia da Trybe que tenho muita facilidade <br />
         com raciocínio lógico, algo essencial para um bom desenvolvedor ter.<br />
              Além disso, tenho fascinação em resolver problemas . Sem sombra de <br /> dúvidas, me encontrei numa área que me identifico fielmente.</p>
        </section>
        <section>
          <h3>Hard Skills</h3>
          <ul>
            <li><img src={jsIcon} alt="Logo Javascript" />Javascript</li>
            <li><img src={htmlIcon} alt="Logo HTML" />HTML</li>
            <li><img src={cssIcon} alt="Logo CSS" />CSS</li>
            <li><img src={reactIcon} alt="Logo React" />React</li>
            <li><img src={gitIcon} alt="Logo Git" /> Git e Github</li>
            <li><img src={jestIcon} alt="Logo Jest" />Jest</li>
            <li><img src={tsIcon} alt="Logo Typescript" /> Typescript</li>
            <li><img src={pythonIcon} alt="" />Python</li>
            <li><img src={nodeIcon} alt="Logo Node.JS" />Node.JS</li>
            <li><img src={mongoIcon} alt="Logo MongoDB" />Mongo DB</li>
            <li><img src={mysqlIcon} alt="Logo MySQL" />MySQL</li>
          </ul>
          <h3>Principais Soft Skills</h3>
          <ul>
            <li>Rápido aprendizado</li>
            <li>Metodologias Agéis</li>
            <li>Trabalho em equipe</li>
          </ul>
        </section>

      </main>
    )
  }
}
