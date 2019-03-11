import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import youtube from './../api/youtube';
import VideoCard from './VideoCard';

class App extends React.Component {
    state = {
        videos: []
    };

    handleInput = async (searchTerm) => {
        let data = await youtube(searchTerm);
        this.setState({videos: data.items})
    }

    render() {
        return (
            <Grid container spacing={24} justify={'center'}>
                <Grid item xs={7}>
                    <SearchBar onSearch={this.handleInput}/>
                </Grid>
                <Grid item xs={3}>
                    <VideoCard videos={this.state.videos}/>
                </Grid> 
                
                <Grid item xs={10}>
                    VideoPlayer
                </Grid>
            </Grid>
        )
    }
}

export default App;