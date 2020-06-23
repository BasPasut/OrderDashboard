import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import OrderCreator from './components/order/OrderCreator';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/createOrder' component={OrderCreator}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
