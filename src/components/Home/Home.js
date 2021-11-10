import React, {Component} from 'react'
import "./Home.css"
import {Table} from 'react-bootstrap'

class Home extends Component {
    render() {
        return ( 
            <div style={{marginRight: "450px", marginLeft: "250px", marginBottom: "250px"}} >
                <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}} >Dew Cup Champions</h1>
                <Table  striped bordered hover>
                            <thead>
                                <tr>
                                <th>Year</th>
                                <th>Team</th>
                                <th>Players</th> 
                                </tr>
                            </thead>                       
                            <tbody>
                                <tr>
                                <td>2021</td>
                                <td>Goobies Mum</td>
                                <td>Bib Glat, Garry Bob, Tyler Bartz</td>
                                </tr>
                                <tr>
                                <td>2020</td>
                                <td>Squids</td>
                                <td>Rick Bonis, Hoag Braun, Boog Schickert, Hunt Stultz</td> 
                                </tr>
                                <tr>
                                <td>2019</td>
                                <td>Goose Chasers</td>
                                <td>Steven Pfaff, Zack Fountain, Alex Fountain, Matt Huinker, Jeep Aspenleiter</td> 
                                </tr>    
                            </tbody>
                </Table>
            </div>
         );
    }
}
export default Home;