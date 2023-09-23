import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch = this.videoSearch.bind(this);
    this.addVideos = this.addVideos.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  selectVideo(video) {
    this.setState({selectedVideo: video});
  }

  addVideos(searchResults) {
    const videos = [];

    searchResults.data.items.forEach((item) => {
      videos.push(item);
    });

    this.setState({ videos: videos, selectedVideo: videos[0] });
  }


  videoSearch(term) {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };

    axios
      .get('./data.json')
      // .get(url, { params: params })
      .then(response => {
        this.addVideos(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <div className="container">
          <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} selectVideo={this.selectVideo} />
          </div>
        </div>
      </div>
    );
  }
}


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

