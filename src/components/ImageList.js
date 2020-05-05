import './ImageList.css';

import React from 'react';

import ImageCard from './ImageCard';

const ImageList = props => {

    if(!props.images){
        return <div>No images found :-( </div>
    }

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;