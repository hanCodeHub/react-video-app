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

class VideoCards extends React.Component{
    constructor(props) {
        super(props)

        this.videos = props.videos;
        this.state = {selectedTitle: ''}
    }

    render() {
        console.log(this.props.videos)
        const cards = this.props.videos.map((video) => {
            const imageURL = video.snippet.thumbnails.default.url;
            const videoTitle = video.snippet.title;

            return (
                <Card 
                    key={video.id.videoId} 
                    style={styles.card}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={imageURL}
                            onClick={e => {
                                this.setState({selectedTitle:videoTitle});
                                this.props.onCardSelect(this.state.selectedTitle);
                            }}
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

export default VideoCards;