import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';
import Home from './components/home';
import DeepDive from './components/deepdive';
import Navbar from './components/navbar';
import Links from './components/links';
import FAQ from './components/faq';
import Precaution from './components/precaution';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'MAP',
      animationDelayForNavbar: 0.6,
    },
    {
      pageLink: '/deepdive',
      view: DeepDive,
      displayName: 'Analysis',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/precaution',
      view: Precaution,
      displayName: 'Precaution',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpline',
      animationDelayForNavbar: 0.5,
    }
  ];

  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>

        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a href="https://github.com/yash42828"
          target="_blank"
          rel="noopener noreferrer">covidcase</a>
        </div>
        <a
          href="https://github.com/yash42828/COVID-19-CASE-TRACKER-INDIA"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>
        <a
          className="button excel"
          href="https://bit.ly/patientdb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Database />
          <span>Crowdsourced Patient Database&nbsp;</span>
        </a>
        <a
          href="https://twitter.com/Yashbaj56206964"
          target="_blank"
          rel="noopener noreferrer"
          className="button twitter"
          style={{justifyContent: 'center'}}
        >
          <Icon.Twitter />
          <span>View updates on Twitter</span>
        </a>
        
      </footer>
    </div>
    
  );
}

export default App;
