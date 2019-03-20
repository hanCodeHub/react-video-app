import React from 'react';

const styles = {
    container: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '56.25%'
    },
    iframe: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '0'
    }
}

const VideoPlayer = ({video, newSearch}) => {
    if (video && !newSearch) {
        const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}?rel=0;&autoplay=1`;
        
        return ( 
            <div style={styles.container}>
                <iframe 
                    style={styles.iframe} 
                    title={video.snippet.title}
                    allow="autoplay"
                    src={videoSRC} 
                    allowFullScreen>
                </iframe>
            </div>
        )
    } else return null;
}

export default VideoPlayer;
