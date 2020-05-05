import React from 'react';

const VideoDetail = (props) => {
    if (!props.video){
        return <div>No selected video to play ...</div>;
    }
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/DB55c7b3-ok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const vidSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="vidPlayer" src={vidSrc} />
            </div>
            <div className="ui segment">
                <h4 className="header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;