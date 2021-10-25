import React from 'react'

const Search = ({search}) => {
    return (
        <div className="search-section">
                
            <input type="text" placeholder="Search.." onChange={(e) => search(e.target.value)}/>

        </div>
    )
}

export default Search
