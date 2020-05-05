import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axiosYT from '../api/Youtube';
import axiosUS from '../api/Unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { imageList: [], videoListData: [], selectedVideo: null};

  componentDidMount(){
    this.onTermSubmit('God');
  }

  onTermSubmit = async term => {
    const respVid = await axiosYT.get('/search', { params: { q: term } });
    this.setState({ 
      videoListData: respVid.data.items,
      selectedVideo: respVid.data.items[0]
    });

    const respImg = await axiosUS.get('/search/photos', {
      params: { query: term }
    });
    this.setState({imageList: respImg.data.results});
  };

  onVideoSelect = selVideo => {
    this.setState({selectedVideo: selVideo});
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSub={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList vidListData={this.state.videoListData} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <ImageList images={this.state.imageList}/>
        </div>
      </div>
    );
  }
}

export default App;
