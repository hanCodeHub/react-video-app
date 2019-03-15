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

class VideoCard extends React.Component{
    constructor(props) {
        super(props)

        this.state = {link: ''}
    }

    render() {
        const cards = this.props.videos.map((video) => {
            const imageURL = video.snippet.thumbnails.default.url;
            const videoTitle = video.snippet.title;
            const videoDescrip = video.snippet.description;

            return (
                <Card key={video.id.videoId} style={styles.card}>
                    <CardActionArea>
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
}

export default VideoCard;