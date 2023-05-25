import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { keyTrigger } = this.props;
    if (event.key.toUpperCase() === keyTrigger.toUpperCase()) {
      this.playAudio();
    }
  };

  handleClick = () => {
    this.playAudio();
  };

  playAudio = () => {
    const audio = this.audioRef.current;
    audio.currentTime = 0;
    audio.play();
    this.props.updateDisplay(this.props.id);
  };

  render() {
    const { id, keyTrigger, clipSrc } = this.props;

    return (
      <div
        className={`drum-pad ${this.props['data-keytrigger'] ? 'data-keytrigger' : ''}`}
        id={id}
        onClick={this.handleClick}
      >
        {keyTrigger}
        <audio
          ref={this.audioRef}
          className="clip"
          src={clipSrc}
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
