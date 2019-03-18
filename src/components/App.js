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
        if (!this.checkChars(searchTerm)) {
            alert('Please enter ASCII characters.');
        } else {
            let data = await youtube(searchTerm);
            this.setState({videos: data.items});
        }
    }

    // handle VideoCard selection
    handleCardSelect = (video) => {
        if (!this.checkChars(video.snippet.title)) {
            alert('Non-ASCII characters detected.');
        } else {
            this.setState({ videoSelect: video });
            this.handleInput(video.snippet.title);
        }
    }

    // check for non-ASCII chars
    checkChars (str) {
        const ASCII = /^[ -~\t\n\r]+$/g;
        return str.match(ASCII); 
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