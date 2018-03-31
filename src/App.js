import React from 'react';
import { Route } from 'react-router-dom';
import CurrentTime from './containers/CurrentTime';

function App() {
  return (
    <div>
      <Route exact path="/" component={Start} />
      <Route path="/currenttime" component={CurrentTime} />
    </div>
  );
}

function Start() {
  return (<div>
    HELLO WORLD
    <a href="/currenttime">TIME</a>
  </div>);
}

export default App;
