import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Typing from './exercise/Typing';
import Home from './home/Home';
import "./App.css";
import ToType from './exercise/ToType';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AppBar position="static">
            <Toolbar>
              <Link className="nav-button" to="/home">
                <IconButton edge="start" color="inherit" aria-label="home">
                  <HomeIcon />
                </IconButton>
              </Link>
              <Link className="nav-button" to="/exercise">
                <Button color="inherit">
                  Exercise
                </Button>
              </Link>
              <Link className="nav-button" to="/home">
                <Button color="inherit">
                  Home
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path='/exercise'>
              <Typing />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;