import React, { Component } from 'react';
import { Container } from 'reactstrap';
import "./home.css";
import typImg from "../images/LeerOmTeTypen.PNG";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <br />
        <img className="image" src={typImg} alt="Leer om te typen" />
        <Container className="text">
          <h2>Welkom op onze leren typen website!</h2>
          <p>Leer typen met 2 verschillende toetsenbordindelingen.</p>
          <p>Op de overzicht pagina staan alle oefeningen.</p>
          <br />
          <Link className="nav-button" to='/overzicht'>
            <Button variant="contained" color="primary">
              Overzicht
            </Button>
          </Link>
        </Container>
      </Container>
    );
  }
}