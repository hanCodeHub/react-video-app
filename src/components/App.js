import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import youtube from './../api/youtube';
import VideoCards from './VideoCards';
import VideoDetails from './VideoDetails';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {
    state = {
        videos: [],
        videoSelect: null,
    };
    
    handleSearch = async (searchTerm) => {   
        // get valid characters from searchTerm
        const term = searchTerm.replace(/[\W]/gi, ' ');
        try {
            let data = await youtube(term);
            this.setState({ videos: data.items });
        } catch (err) {
            console.log(err);
        }
    }

    // handle VideoCard selection
    handleCardSelect = (video) => {
        this.setState({ videoSelect: video });
        this.handleSearch(video.snippet.title);
    }

    render() {
        return (
            <Grid container direction='row' justify='center' spacing={16}>
                <Grid item xs={12} sm={10} lg={8} xl={7}>
                    <SearchBar onSearch={this.handleSearch}/>
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