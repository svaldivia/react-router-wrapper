import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import BackbonePageWrapper from './components/BackboneWrapper.jsx';
import PageView from '../backbone-js/view/page.js';

const BkTools = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/test/0">Test</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/test/:counter" component={Test} />
        <Route render={() => <h1>No route found!</h1>}/>
      </Switch>
    </div>
  </Router>
);

const Test = ({ match, history }) => {
  const urlParams = [match.params.counter];
  return (
    <BackbonePageWrapper
      View={PageView}
      urlParams={urlParams}
      history={history}
    />
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


render(
  <BkTools />,
  document.getElementById('react-container'),
);
