import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PDF from './pages/pdf'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>

            <Route exact path="/document/:fileName">
              <PDF />
            </Route>
        </Switch>
    </BrowserRouter>
  )
  
}

export default App;
