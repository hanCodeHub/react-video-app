import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import youtube from './../api/youtube';

class App extends React.Component {
    state = {
        videos: []
    };

    handleInput = async (searchTerm) => {
        const data = await youtube(searchTerm);
        console.log(data.items);
    }

    render() {
        return (
            <Grid container justify={'center'}>
                <Grid item xs={8}>
                    <SearchBar onSearch={this.handleInput}/>
                </Grid>
            </Grid>
        )
    }
}

export default App;