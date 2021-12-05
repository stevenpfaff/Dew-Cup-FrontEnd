import React, { Component } from 'react'
import "./Home.css"
import Tourneys from "./Tournaments"
import DewCupGroup from "../../Images/DewCupGroup.jpeg"

class Home extends Component {
    render() {
        return (
            <div style={{ marginRight: "450px", marginLeft: "250px", marginBottom: "250px" }} >
                <Tourneys />
                <img src={DewCupGroup} width="1284" height="1000" class="center" alt=""></img>
            </div>
        );
    }
}
export default Home;