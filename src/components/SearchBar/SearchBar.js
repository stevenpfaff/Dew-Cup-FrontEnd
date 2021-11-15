import React, { useState } from 'react';
import "./SearchBar.css"
import {Button, Container, Grid, Paper, TextField} from '@material-ui/core';
import {Form} from 'react-bootstrap';

    const SearchBar = (props) => {

        const[searchTerm, setSearchTerm] = useState();


    const handleChange = (event) => {
       setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.playerSearch(searchTerm);
        
    }

    
    return (
        <Container>
            <Form onSubmit={handleSubmit} className="search-bar">
                    <TextField  fullWidth variant="outlined"
                    className="input"  type="text" name="searchTerm" placeholder="Search by player name"
                    onChange={handleChange} value={searchTerm} />
                    <Button type="submit" variant="contained" class="btn btn-success">Search</Button>
                
            </Form>
        </Container>
        
    )
    
}

export default SearchBar;