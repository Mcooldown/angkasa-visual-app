import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import 'react-owl-carousel2/src/owl.carousel.css';
import { AboutUs, Cart, Checkout, Home, OurServices, ServiceDetail} from './pages';
import { Footer, Navbar } from './components/molecules';

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
              <Route path="/cart" exact>
                    <Cart />
              </Route>
              <Route path="/checkout" exact>
                    <Checkout />
              </Route>
              <Route path="/service-detail" exact>
                    <ServiceDetail />
              </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
