import React, { Component } from 'react'
import { Container } from 'reactstrap';

export default class CharactersToType extends Component {

    charactersBefore() {
        var beforeList = "";
        for (var i = 0; i < this.props.test.key; i++) {
            beforeList += this.props.test.list[i];
        }
        return <h3 className='first'>{beforeList}</h3>
    }

    currentCharacter() {
        var i = this.props.test.key;
        if (this.props.test.isCorrect) {
            return <h3 className='middle'>{this.props.test.list[i]}</h3>
        }
        else {
            return <h3 className='incorrect-character'>{this.props.test.list[i]}</h3>
        }
    }

    charactersAfter() {
        var afterList = "";
        for (var i = this.props.test.key + 1; i < this.props.test.list.length; i++) {
            afterList += this.props.test.list[i];
        }
        return <h3 className='last'>{afterList}</h3>
    }

    render() {
        return (
            <div className='characters-to-type'>
                <br/>
                { this.charactersBefore()}
                { this.currentCharacter()}
                { this.charactersAfter()}
            </div>
        )
    }
}