import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      margin: '1rem 0',
    },
  };

const VideoDetails = ({video, videoList}) => {
    console.log(video)
    if (video) { 
        return (
        <div style={styles.card}>
            <Paper>
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
        <div style={styles.card}>
            <Paper>
                <Typography variant="h5" component="h3">    
                    Please select a video from the list.
                </Typography>
            </Paper>
        </div>
        ) 
    } else return null;
}

export default VideoDetails;