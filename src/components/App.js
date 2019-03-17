import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import youtube from './../api/youtube';
import VideoCards from './VideoCards';

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
            <Grid container spacing={16} justify={'center'}>
                <Grid item xs={10}>
                    <SearchBar onSearch={this.handleInput}/>
                </Grid>
                <Grid item xs={7}>
                    VideoPlayer
                </Grid>
                <Grid item xs={3}>
                    <VideoCards 
                        videos={this.state.videos}
                        onCardSelect={this.handleInput}
                    />
                </Grid> 
            </Grid>
        )
    }
}

export default App;