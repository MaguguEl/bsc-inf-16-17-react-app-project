//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Home from './components/Pages/Home';
import Blog from './components/Pages/Blog';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        {/*<Navbar />
        <Hero />
        <Cards />
        <Footer />*/}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Blog' exact component={Blog} />
          <Route path='/Portfolio' exact component={Portfolio} />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
