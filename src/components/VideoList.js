import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    if (!props.vidListData) {
        return <div>No Video List Data available</div>
    }
    const renderedList = props.vidListData.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}  onVideoSelect={props.onVideoSelect} />;
    });

    return (
            <div className="ui relaxed divided list"> {renderedList} </div>
    );
}

export default VideoList;