import React, { Component } from 'react'
import Container from '@material-ui/core/Container';

export default class ToType extends Component {

    charactersBefore() {
        var beforeList = "";
        for (var i = 0; i < this.props.test.key; i++) {
            beforeList += this.props.test.list[i];
        }
        return <p>{beforeList}</p>
    }

    currentCharacter() {
        var i = this.props.test.key;
        return <p>{this.props.test.list[i]}</p>
    }

    charactersAfter() {
        var afterList = "";
        for (var i = this.props.test.key + 1; i < this.props.test.list.length; i++) {
            afterList += this.props.test.list[i];
        }
        return <p>{afterList}</p>
    }

    render() {
        return (
            <Container className='to-type'>
                { this.charactersBefore()}
                { this.currentCharacter()}
                { this.charactersAfter()}
            </Container>
        )
    }
}