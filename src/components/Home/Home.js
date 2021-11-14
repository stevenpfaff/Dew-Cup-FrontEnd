import React, {Component} from 'react'
import "./Home.css"
import {Table} from 'react-bootstrap'
import Tourney from "./Tournaments"

class Home extends Component {
    render() {
        return ( 
            <div style={{marginRight: "450px", marginLeft: "250px", marginBottom: "250px"}} >
                <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}} >Dew Cup Tournaments</h1>
                <Tourney/>
            </div>
         );
    }
}
export default Home;