import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Schedules from './Pages/Schedules';
import Testes from './Pages/Testes';

const routes = [
  {
    component: Home,
    name: 'Home',
    path: '/',
  },
  {
    component: Schedules,
    name: 'Schedules',
    path: '/Schedules',
  },
  {
    component: Testes,
    name: 'Testes',
    path: '/Testes',
  },
];

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar title="Pitang" routes={routes} />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
