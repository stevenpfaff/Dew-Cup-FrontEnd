import React, { useState } from 'react';
import "./SearchBar.css"
import {Button, Container, Grid, Paper, TextField} from '@material-ui/core';
import {Form} from 'react-bootstrap';

    const SearchBar = (props) =>{

        const[searchTerm, setSearchTerm] = useState();


    const handleChange = (event) => {
       setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.playerSearch(searchTerm);
        
    }

    const playerSearch = (searchTerm) => {
        const filteredList = this.state.allPlayers.filter(function(player){
         return player.name.toLowerCase() == searchTerm.toLowerCase()
         })
        this.setState({
          allPlayers : filteredList
        })
       }

    
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Grid className="search-bar"> 
                    <TextField  fullWidth variant="outlined"
                    className="input"  type="text" name="searchTerm" placeholder="Search by player name"
                    onChange={handleChange} value={searchTerm} />
                </Grid>
            </Form>
        </Container>
        
    )
    
}

export default SearchBar;