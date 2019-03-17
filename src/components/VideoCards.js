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
    const cards = props.videos.map((video) => {
        const imageURL = video.snippet.thumbnails.high.url;
        const videoTitle = video.snippet.title;

        return (
            <Card 
                key={video.id.videoId} 
                style={styles.card}
                onClick={e => props.onCardSelect(videoTitle)}
            >
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
        )
    })

    return cards;

}

export default VideoCards;