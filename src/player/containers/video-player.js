import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

import { connect } from 'react-redux';

class VideoPlayer extends Component{
  state = {
    pause: true,
    timeDuration: 0,
    timeCurrentTime: 0,
    duration: 0,
    currentTime: 0,
    loading: false
  }

  togglePlay = (event) =>{
    this.setState({
      pause: !this.state.pause
    });
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoPlay)
    });
  }

  leftPad = number => {
    const pad = "00";
    return pad.substring(0, pad.length - number.length) + number;
  }

  formatedTime = secs => {
    const minutos = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);

    return `${minutos}:${this.leftPad(seconds.toString())}`;
  }

  handleLoadedMetaData = event => {
    this.video = event.target;
    const formatedDuration = this.formatedTime(this.video.duration)
    this.setState({
      TimeDuration: formatedDuration,
      duration: this.video.duration
    })
  }
  
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime);
    const formatedCurrentTime = this.formatedTime(this.video.currentTime)
    this.setState({
      TimeCurrentTime: formatedCurrentTime,
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }

  handleFullScreenClick = event => {
    if(!document.webkitIsFullScreen){ 
      this.player.webkitRequestFullscreen()
    }else{
      document.webkitExitFullscreen();
    }
  }

  setRef = element => {
    this.player = element;
  }

  render(){
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
        />
        <Controls>  
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
            />
          <Timer
            duration={this.state.TimeDuration}
            currentTime={this.state.TimeCurrentTime}
            />
          <ProgressBar
            duration={this.state.duration}
            val={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          handleLoadedMetaData={this.handleLoadedMetaData}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.media.get('src')}
        />
      </VideoPlayerLayout>
    )
  }
}

function mapStateToProps(state, props){
  return {
    // media: state.get('data').get('entities').get('media').get(props.id)
    media: state.getIn(['data', 'entities', 'media', props.id])
  }
}

export default connect(mapStateToProps)(VideoPlayer);