import React from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    handleInput = (e) => {
        this.setState( {input: e.target.value} )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <TextField 
                id='input-field'
                label='Search for videos'
                variant='filled'
                fullWidth
                onChange={this.handleInput}
                value={this.state.input}
                /> 
            </form>
            
        )
    }
}

export default SearchBar;