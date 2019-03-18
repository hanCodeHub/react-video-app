import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import youtube from './../api/youtube';
import VideoCards from './VideoCards';

class App extends React.Component {
    state = {
        videos: [],
        videoSelect: {}
    };
    // send request on both search and card select
    handleInput = async (searchTerm) => {
        let data = await youtube(searchTerm);
        this.setState({videos: data.items});
    }

    handleCardSelect = (video) => {
        // find if non-english chars were used - regex
        
        // send request to translate - Yandex
        if (!video.snippet.title.match('/^[a-zA-Z \.\!\?]*$/')) {
            alert('Non-english chars detected.');
        } else {
            this.setState({ videoSelect: video });
            this.handleInput(video.snippet.title);
        }
    }

    render() {
        return (
            <Grid container spacing={16} justify={'center'}>
                <Grid item xs={10}>
                    <SearchBar onSearch={this.handleInput}/>
                </Grid>
                <Grid item xs={3}>
                    <VideoCards 
                        videos={this.state.videos}
                        onCardSelect={this.handleCardSelect}
                    />
                </Grid>                 
                <Grid item xs={7}>
                    VideoPlayer
                </Grid>

            </Grid>
        )
    }
}

export default App;