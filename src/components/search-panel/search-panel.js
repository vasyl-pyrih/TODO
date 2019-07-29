import React, { Component } from 'react';
 
import './search-panel.css';


export default class SearchPanel extends Component {

    constructor () {
        super();

        this.state = {
            term: ''
        };
    };

    onSearchChange = (event) => {

        const term = event.target.value;

        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render () {
        return (
            <input type="text"
                className="form-control search-input"
                value={ this.state.term }
                placeholder="type to search..." 
                onChange = { this.onSearchChange } />
        );
    }
}
