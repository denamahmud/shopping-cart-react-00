

const Search = ({search}) => {

  

    const SEARCH_STYLE = {
        width : "50%",
        margin : "50px auto 20px"
    
    }
    const searchInput = {
        width : "100%",
        outline : "1px solid #70587c",
        borderRadius : '10px'
    
    }
    return (
        <div style={SEARCH_STYLE}>
                
            <input style={searchInput} type="text" placeholder="Search.." onChange={(e) => search(e.target.value)}/>

        </div>
    )
}

export default Search
