import React from 'react';

import './search-panel.css';

const SearchPanel = () => {

    const searchText = 'Type to search...'
    const searchStyle = {
        fontSize: '25px'
    };

    return (
        <input type="text"
            className="form-control search-input"
            placeholder="type to search" />
    );
};

export default SearchPanel;