import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._video = null;

    this.state = {
      isLoaded: false,
      isPlaying: false,
    }
  }

  render() {
    const { poster } = this.props;

    return <video
      className="player__video"
      poster={poster}
      preload="metadata"
      ref={this._videoRef}
    ></video>
  }

  componentDidMount() {
    const { src } = this.props;
    this._video = this._videoRef.current;
    this._video.src = src;

    this._video.oncanplaythrough = () => {
      this.setState({
        isLoaded: true
      })
    };

    this._video.onpause = () => {
      this.setState({
        isPlaying: false,
      })
      this._video.load();
    };

    this._video.onplay = () => {
      this.setState({
        isPlaying: true
      })
    }
  }

  componentDidUpdate() {
    this.props.isPlaying ? this._video.play() : this._video.pause();
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default VideoPlayer;
