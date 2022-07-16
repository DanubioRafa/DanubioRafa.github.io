import React, { Component } from 'react'
import './styleAbout.css';

export default class About extends Component {
  render() {
    return (
      <main>
        <section>
        <h3>Sobre Mim</h3>
        <p>Me chamo Rafael, tenho 20 anos. Atualmente moro em Canindé, Ceará.</p>
        </section>
        <section>
          <h3>Hard Skills</h3>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>React Test Library</li>
            <li>Git e Github</li>
            <li>Jest</li>
            <li>Linux</li>
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
