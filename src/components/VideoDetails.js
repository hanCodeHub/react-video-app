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
        backgroundColor: '#fff',
        border: '2px solid #3f51b5'
    },
    subtitle: {
        color: '#3f51b5'
    },
    body: {
        color: '#000'
    }
  };

const VideoDetails = ({video, videoList}) => {  
    
    // if a video is selected from VideoCards list
    if (video) { 
        return (
        <div style={styles.paperDiv}>
            <Paper style={styles.paperInner} elevation={0}>
                <Typography style={styles.body} variant="h5">    
                    {video.snippet.title}
                </Typography>
                <Typography style={styles.body} variant="body1">
                   {video.snippet.description}
                </Typography>    
            </Paper>
        </div>
        );
    // if no video selected but a search is submitted
    } else if (!videoList.length == 0) {
        return (
        <div style={styles.paperDiv}>
            <Paper style={styles.paperInner} elevation={0}>
                <Typography style={styles.subtitle} variant="h5">
                    Select a video from the list.
                </Typography>
            </Paper>
        </div>
        );
    // welcome message when the app first loads
    } return (
        <div style={styles.paperDiv}>
            <Paper style={styles.paperInner} elevation={0}>
                <Typography style={styles.subtitle} variant="h5">
                    Search for any YouTube video!
                </Typography>
            </Paper>
        </div>
    );
}

export default VideoDetails;