import React from 'react';
import DrumPad from './DrumPad';
import './DrumMachine.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { key } = event;
    const drumPad = document.getElementById(key.toUpperCase());
    if (drumPad) {
      drumPad.playAudio();
      this.updateDisplay(drumPad.getAttribute('data-description'));
    }
  };

  updateDisplay = (displayText) => {
    this.setState({ displayText });
  };

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.displayText}</div>
        {/* DrumPad 1 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          id="Heater-1"
          keyTrigger="Q"
          updateDisplay={this.updateDisplay}
          dataDescription="Heater 1"
        />

        {/* DrumPad 2 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          id="Heater-2"
          keyTrigger="W"
          updateDisplay={this.updateDisplay}
          dataDescription="Heater 2"
        />

        {/* DrumPad 3 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          id="Heater-3"
          keyTrigger="E"
          updateDisplay={this.updateDisplay}
          dataDescription="Heater 3"
        />

        {/* DrumPad 4 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          id="Heater-4"
          keyTrigger="A"
          updateDisplay={this.updateDisplay}
          dataDescription="Heater 4"
        />

        {/* DrumPad 5 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          id="Clap"
          keyTrigger="S"
          updateDisplay={this.updateDisplay}
          dataDescription="Clap"
        />

        {/* DrumPad 6 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          id="Open-HH"
          keyTrigger="D"
          updateDisplay={this.updateDisplay}
          dataDescription="Open-HH"
        />

        {/* DrumPad 7 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          id="Kick-n'-Hat"
          keyTrigger="Z"
          updateDisplay={this.updateDisplay}
          dataDescription="Kick-n'-Hat"
        />

        {/* DrumPad 8 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          id="Kick"
          keyTrigger="X"
          updateDisplay={this.updateDisplay}
          dataDescription="Kick"
        />

        {/* DrumPad 9 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          id="Closed-HH"
          keyTrigger="C"
          updateDisplay={this.updateDisplay}
          dataDescription="Closed-HH"
        />
      </div>
    );
  }
}

export default DrumMachine;
