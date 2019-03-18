import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    paperDiv: {
        margin: '1rem 0'
    },
    paperInner: {
        padding: '1.5rem'
    }
  };

const VideoDetails = ({video, videoList}) => {
    if (video) { 
        return (
        <div style={styles.paperDiv}>
            <Paper style={styles.paperInner}>
                <Typography variant="h5" component="h3">    
                    {video.snippet.title}
                </Typography>
                <Typography component="p">
                    {video.snippet.description}
                </Typography>
            </Paper>
        </div>
        )
    } else if (!videoList.length == 0) {
        return (
        <div style={styles.paperDiv}>
            <Paper style={styles.paperInner}>
                <Typography variant="h5" component="h3">    
                    Please select a video from the list.
                </Typography>
            </Paper>
        </div>
        ) 
    } return null;
}

export default VideoDetails;