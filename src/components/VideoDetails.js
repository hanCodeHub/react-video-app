import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    paperDiv: {
        margin: '1rem 0'
    },
    paperInner: {
        padding: '1rem 1.5rem',
        textAlign: 'center',
        backgroundColor: '#0091ea',
    },
    typography: {
        color: '#fff'
    }
  };

const VideoDetails = ({video, videoList}) => {    
    if (video) { 
        return (
        <div style={styles.paperDiv}>
            <Paper style={styles.paperInner} elevation='0'>
                <Typography style={styles.typography} variant="h5" component="h3">    
                    {video.snippet.title}
                    <p>
                    {video.snippet.description}
                    </p>
                </Typography>
            </Paper>
        </div>
        )
    } else if (!videoList.length == 0) {
        return (
        <div style={styles.paperDiv}>
            <Paper style={styles.paperInner} elevation='0'>
                <Typography style={styles.typography} variant="h5" component="h3">
                    Select a video from the list.
                </Typography>
            </Paper>
        </div>
        ) 
    } return null;
}

export default VideoDetails;