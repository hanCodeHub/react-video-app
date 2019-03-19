import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    paper: {
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '1rem',
        transition: '.3s ease',
        overflow: 'hidden'
    },
    img: {
        display: 'inline-block',
        marginBottom: '-4px'
    },
    typography: {
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '2rem',

    }
  };

const VideoCards = (props) => {
    // render list of videos in cards
    const cards = props.videos.map((video) => {
        const imageURL = video.snippet.thumbnails.high.url;
        const videoTitle = video.snippet.title;

        return (
            <div key={video.id.videoId}>
                <Paper 
                    // pass selected video to App
                    onClick={e => props.onCardSelect(video)} 
                    style={styles.paper}
                    className='rise'>
                    <img
                        src={imageURL}
                        height='100'
                        width='150'
                        style={styles.img}
                    />
                    <Typography variant='subtitle1' style={styles.typography}>
                        {videoTitle}
                    </Typography>
                </Paper>
            </div>
        )
    })

    return cards;

}

export default VideoCards;