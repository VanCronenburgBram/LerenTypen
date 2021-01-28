import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Toetsenbord from './Keyboard';
import ToType from './ToType';

export default class Typing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '1',
            list: [],
            key: 3
        }
    }

    componentDidMount() {
        axios.post('http://localhost:4000/servers/getById', { id: this.state.id })
            .then(response => {
                this.setState({ list: response.data[0].list })
            })
            .catch(function (error) {
                console.log(error)
            })
            
    }

    onChangeInput = event => {
        console.log(this.state.key)
        console.log(Toetsenbord.state)
        //const input = event.target.value;
        var number = this.state.key++;
        this.setState({ key: number });
        //this.keyboard.setInput(input);
      };

    render() {
        return (
            <Container>
                <ToType test={{list: this.state.list, key: this.state.key}}/>
                <input type="hidden"/>
                <Toetsenbord onChange={this.onChangeInput}/>
            </Container>
        )
    }
}   