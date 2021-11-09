import React from 'react'
import SearchBar from '../SearchBar/SearchBar';

const Home = (props) => {
    return(
        <div>
        <h1> Dew Cup Home Page </h1>
        <SearchBar playerSearch={props.playerSearch}/>
        </div>
    )
}
export default Home;