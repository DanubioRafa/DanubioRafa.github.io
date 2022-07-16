import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './pages/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={ About }/>
        <Route path="/projects" component={ Projects } />
        <Route path="/" component={ Home }/>
      </Switch>
    </div>
  );
}

export default App;
