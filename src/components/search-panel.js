import React from 'react';

const SearchPanel = () => {

    const searchText = 'Type to search'
    const searchStyle = {
        fontSize: '25px'
    };

    return <input 
        placeholder={ searchText }
        style = {searchStyle}
        />;
};

export default SearchPanel;