import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import youtube from './../api/youtube';
import VideoCards from './VideoCards';
import VideoDetails from './VideoDetails';
import VideoPlayer from './VideoPlayer';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import stockIMG from './../img/stock-thumbnail.jpg';

class App extends React.Component {
    state = {
        videos: [],
        videoSelect: null,
    };
    
    // send request on both search and card select
    handleInput = async (searchTerm) => {   
        if (!this.checkChars(searchTerm)) {
            alert('Please enter ASCII characters.');
        } else {
            try {
                let data = await youtube(searchTerm);
                this.setState({ videos: data.items });
                console.log(this.state.videos);
            } catch (err) {
                console.log(err);
            }
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
            <Grid container direction='row' justify='center' spacing={16}>
                
                <Grid item xs={12} sm={10} lg={8} xl={7}>
                    <SearchBar onSearch={this.handleInput}/>
                </Grid>

                <Grid item xs={12} sm={10} lg={8} xl={7}>
                    <VideoPlayer 
                        video={this.state.videoSelect}
                    />    
                    <VideoDetails 
                        video={this.state.videoSelect}
                        videoList={this.state.videos}
                    />
                </Grid>

                <Grid item zeroMinWidth xs={12} sm={10} lg={8} xl={7}>
                    <VideoCards
                        videos={this.state.videos}
                        onCardSelect={this.handleCardSelect}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default App;