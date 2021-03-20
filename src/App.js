import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Order from './screens/Order';
import Packs from './screens/Packs';
import Cart from './screens/Cart';

const App = () => {
  return (
    <div>
      <h1>Simon's Sweet Shop</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Order} />
          <Route path="/packs" component={Packs} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
