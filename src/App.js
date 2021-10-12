import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import { AboutUs, Home, OurServices, Testimonies } from './pages';
import { Footer, Navbar } from './components/molecules';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className="wrapper">
          <Switch>
              <Route path="/" exact>
                    <Home />
              </Route>
              <Route path="/about-us" exact>
                    <AboutUs />
              </Route>
              <Route path="/our-services" exact>
                    <OurServices />
              </Route>
              <Route path="/testimonies" exact>
                    <Testimonies />
              </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
