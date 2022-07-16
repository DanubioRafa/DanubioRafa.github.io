import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './helper/renderWithRouter';
import About from './pages/About';
import Projects from './pages/projects/Projects';


describe('Testa Componente Header', () => {

  test('Se o meu nome aparece no cabeçalho', () => {
    const { history: { location } } = renderWithRouter(<App />);
    const expectNameHeading = screen.getByRole('heading', { name: 'Danubio Rafael', level: 2});

    expect(location.pathname).toBe('/');
    expect(expectNameHeading).toBeDefined();
  })

  test('Se o cabeçalho aparece em todas as rotas existentes', () => {
    const { history } = renderWithRouter(<App />)

    const headerHome = screen.getByRole('banner');
    expect(headerHome).toBeDefined();

    history.push('/about');
    const headerAbout = screen.getByRole('banner');
    expect(headerAbout).toBeDefined();

    history.push('/projects');
    const headerProjects = screen.getByRole('banner');
    expect(headerProjects).toBeDefined();
  })

  test('Se o cabeçalho possui um link para a rota /home', () => {
    renderWithRouter(<App />);
    const expectedLinkHome = screen.getByRole('link', { name: 'Início' });

    expect(expectedLinkHome).toBeDefined();
  })

  test('Se o cabeçalho possui um link para a rota /about', () => {
    const { history } = renderWithRouter(<App />);
    const expectedLinkAbout = screen.getByRole('link', { name: 'Sobre' });

    expect(expectedLinkAbout).toBeDefined()
    fireEvent.click(expectedLinkAbout);
    expect(history.location.pathname).toBe('/about');
  })

  test('Se o cabeçalho possui um link para a rota /projects', () => {
    const { history } = renderWithRouter(<App />);
    const expectedLinkProjects = screen.getByRole('link', { name: 'Projetos' });

    expect(expectedLinkProjects).toBeDefined()
    fireEvent.click(expectedLinkProjects);
    expect(history.location.pathname).toBe('/projects')

})

});

  describe('Testa a rota /home', () => {
    test('Se o conteúdo aparece na tela', () => {
      renderWithRouter(<App />);
      const expectedWelcomeMessage = screen.getByRole('heading', { name: 'Seja bem-vindo ao meu Portfolio'});
      const expectedStack = screen.getByText(/desenvolvedor web fullstack/i)

      expect(expectedWelcomeMessage).toBeDefined();
      expect(expectedStack).toBeDefined();
    })

    test('Se a imagem aparece na tela', () => {
      renderWithRouter(<App />);

      const expectedImage = screen.getByRole('img', { name: /ilustração/i })

      expect(expectedImage).toBeDefined();
    })
  })

describe('Testa a rota /about', () => {
  test('Se a minha descrição aparece', () => {
    const description = 'Me chamo Rafael, tenho 20 anos. Atualmente moro em Canindé, Ceará.';
    renderWithRouter(<About />);

    const expectedDescription = screen.getByText(description);

    expect(expectedDescription).toBeDefined();
  })

  test('Se as minhas skills aparecem', () => {
    renderWithRouter(<About />);

    const expectedSkills = screen.getAllByRole('listitem');

    expect(expectedSkills).toHaveLength(11);
  })
})

describe('Testa a rota /projects', () => {
  test('Se as imagens dos projetos aparecem na tela', () => {
    renderWithRouter(<Projects />);

    const expectedImgs = screen.getAllByRole('img');

    expect(expectedImgs).toHaveLength(2);
  })

  
})