import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Exercise from './exercise/Exercise';
import Home from './home/Home';
import "./App.css";

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
              <Exercise />
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