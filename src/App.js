import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Order from './screens/Order';
import Packs from './screens/Packs';
import Cart from './screens/Cart';

const App = () => {
  return (<Router>
      <Switch>
        <Route exact path="/" component={Order} />
        <Route path="/packs" component={Packs} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>);
}

export default App;
