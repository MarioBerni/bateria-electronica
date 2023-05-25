import React from 'react';
import DrumPad from './DrumPad';
import './DrumMachine.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 'Selecciona una letra', // Texto inicial
      volume: 50, // Agrega el estado del volumen inicial
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
      if (this.state.displayText === 'Selecciona una letra') {
        this.setState({ displayText: '' }); // Elimina el texto inicial al empezar a utilizar la aplicación
      }
      this.updateDisplay(drumPad.getAttribute('data-description'));
    }
  };

  updateDisplay = (displayText) => {
    this.setState({ displayText });
  };

  updateVolume = (volume) => {
    this.setState({ volume });
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
          data-keytrigger
        />

        {/* DrumPad 2 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          id="Heater-2"
          keyTrigger="W"
          updateDisplay={this.updateDisplay}
          dataDescription="Heater 2"
          data-keytrigger
        />

        {/* DrumPad 3 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          id="Heater-3"
          keyTrigger="E"
          updateDisplay={this.updateDisplay}
          dataDescription="Heater 3"
          data-keytrigger
        />

        {/* DrumPad 4 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          id="Heater-4"
          keyTrigger="A"
          updateDisplay={this.updateDisplay}
          dataDescription="Heater 4"
          data-keytrigger
        />

        {/* DrumPad 5 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          id="Clap"
          keyTrigger="S"
          updateDisplay={this.updateDisplay}
          dataDescription="Clap"
          data-keytrigger
        />

        {/* DrumPad 6 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          id="Open-HH"
          keyTrigger="D"
          updateDisplay={this.updateDisplay}
          dataDescription="Open-HH"
          data-keytrigger
        />

        {/* DrumPad 7 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          id="Kick-n'-Hat"
          keyTrigger="Z"
          updateDisplay={this.updateDisplay}
          dataDescription="Kick-n'-Hat"
          data-keytrigger
        />

        {/* DrumPad 8 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          id="Kick"
          keyTrigger="X"
          updateDisplay={this.updateDisplay}
          dataDescription="Kick"
          data-keytrigger
        />

        {/* DrumPad 9 */}
        <DrumPad
          clipSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          id="Closed-HH"
          keyTrigger="C"
          updateDisplay={this.updateDisplay}
          dataDescription="Closed-HH"
          data-keytrigger
        />
      </div>
    );
  }
}

export default DrumMachine;
