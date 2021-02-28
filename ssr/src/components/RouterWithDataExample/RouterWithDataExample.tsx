import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { RouterSwithWithFetchingData } from '../RouterSwithWithFetchingData/RouterSwithWithFetchingData';

import { ROUTES } from '../../routes';

export const RouterWithDataExample: React.FC = function RouterWithDataExample() {
  
  return (
    <section className="section">
      <nav className="section__navigation">
        <Link to="/counter" className="nav-item">Counter</Link>
        <Link to="/user" className="nav-item">User</Link>
        <Link to="/" className="nav-item">Main</Link>
      </nav>
      
      <div className="section__content">
        <Switch>
          { ROUTES.map( (route) => <Route {...route} /> ) }
        </Switch>
      </div>
    </section>
  );
};
