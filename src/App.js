// eslint-disable-next-line
import React from 'react';
import '../src/style.css';
import Events from '../components/events.js';
import Input from '../components/input.js';
import Navigation from '../components/Navigation.js';
import About from '../components/About.js';
import Contact from '../components/contact.js';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Events /> */}
      {/* <Input /> */}
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}
const Home = () => {
  return <h1>This is a homepage</h1>;
};
export default App;
