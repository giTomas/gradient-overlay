import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as container from '../_container';

function listComponents(dict) {
  return Object.values(dict);
}

const LIST = listComponents(container)

const Home = () => (
  <ul>{LIST.map(({name}) => (
      <li key={`link_${name}`}>
        <Link to={`/${name}`}>{name}</Link>
      </li>
    ))}
  </ul>
)

const RouterComponent = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      {LIST.map(component => (
        <Route key={`route_${component.name}`}path={`/${component.name}`} component={component} />
      ))}
    </div>
  </Router>
);

export default RouterComponent;
