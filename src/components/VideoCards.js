import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      margin: '1rem 0',
    },
  };

const VideoCards = (props) => {
    // render list of videos in cards
    const cards = props.videos.map((video) => {
        const imageURL = video.snippet.thumbnails.high.url;
        const videoTitle = video.snippet.title;

        return (
            <div key={video.id.videoId}>
                <Card 
                    style={styles.card}
                    // pass video to App on click
                    onClick={e => props.onCardSelect(video)}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            image={imageURL}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                {videoTitle}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    })

    return cards;

}

export default VideoCards;