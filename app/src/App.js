import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Typing from './exercise/Typing';
import Home from './home/Home';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="home">
                <Link className="NavButton" to="/home">
                  <HomeIcon/>
                </Link>
              </IconButton>
              <Button color="inherit">
                <Link className="NavButton" to="/exercise">
                  Exercise
                </Link>
              </Button>
              <Button color="inherit">
                <Link className="NavButton" to="/home">
                  Home
                </Link>
              </Button>
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