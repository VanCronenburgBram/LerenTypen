import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Keyboard.css";

export default class Toetsenbord extends Component {
  state = {
    layoutName: "default",
    input: ""
  };

  onChange = input => {
    this.setState({ input });
    console.log("Input changed", input);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={this.onChangeInput}
        />
        <Keyboard
          keyboardRef={r => (this.keyboard = r)}
          layoutName={this.state.layoutName}
          //onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          physicalKeyboardHighlight={true}
          layout={{
            default: [
              "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
              "{tab} q w e r t y u i o p [ ] \\",
              "{capslock} a s d f g h j k l ; ' {enter}",
              "{shiftleft} z x c v b n m , . / {shiftright}",
              "{space}"
            ],
            shift: [
              "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
              "{tab} Q W E R T Y U I O P { } |",
              '{capslock} A S D F G H J K L : " {enter}',
              "{shiftleft} Z X C V B N M < > ? {shiftright}",
              "{space}"
            ]
          }}
        />
      </div>
    );
  }
}