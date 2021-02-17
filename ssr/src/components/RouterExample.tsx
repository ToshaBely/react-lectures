import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { SecondsCounter } from './SecondsCounter';
import { StaticHelloComponent } from './StaticHelloComponent';

export const RouterExample: React.FC = function RouterExample() {
  
  return (
    <section className="section">
      <nav className="section__navigation">
        <Link to="/" className="nav-item">Main</Link>
        <Link to="/counter" className="nav-item">Counter</Link>
      </nav>
      
      <div className="section__content">
        <Switch>
          <Route path="/counter" component={SecondsCounter} />
          <Route path="/" component={StaticHelloComponent} />
        </Switch>
      </div>
    </section>
  );
};
