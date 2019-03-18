import React from 'react';

const styles = {
    iframe: {
        width: '100%',
        maxWidth: '60rem',
        height: '50vh',
        margin: '1rem 0'
    }
}

const VideoPlayer = ({video}) => {
    if (video) {
        const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}?rel=0;&autoplay=1`;
        
    return ( 
        <iframe 
            style={styles.iframe} 
            title={video.snippet.title}
            allow="autoplay"  
            src={videoSRC} 
            allowFullScreen>
        </iframe>
        )
    } else return null;
}

export default VideoPlayer;
