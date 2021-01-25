import React, { Component } from 'react'
import axios from 'axios'
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import Toetsenbord from './Keyboard';

export default class Typing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            list: []
        }
    }

    getById = () => {
        axios.post('http://localhost:4000/servers/getById', { id: this.state.id })
            .then(json => {
                const exercise = json.data
                this.setState({ exercise: exercise })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    
      

    render() {
        return (
            <Container className='App'>
                <Toetsenbord/>
            </Container>
        )
    }
}   