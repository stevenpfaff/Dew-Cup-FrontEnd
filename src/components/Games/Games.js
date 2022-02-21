import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Games.css"
import dci from '../../data/dci.json'
import dcii from '../../data/dcii.json'
import dciii from '../../data/dciii.json'
import bwmi from '../../data/bwmi.json'
import dciv from '../../data/dciv.json'
import crci from '../../data/crcgames.json'

function Games() {
    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Dew Cup I</h1>
            <div>
                <Table striped border hover>
                    <thead>
                        <th>Type</th>
                        <th>Away Team</th>
                        <th>Score</th>
                        <th>Away Players</th>
                        <th>Home Team</th>
                        <th>Score</th>
                        <th>Home Players</th>
                    </thead>
                    <tbody>
                        {dci.map(dci => (
                            <tr>
                                <td>{dci.type}</td>
                                <td>{dci.away_team}</td>
                                <td>{dci.away_score}</td>
                                <td>{dci.away_players}</td>
                                <td>{dci.home_team}</td>
                                <td>{dci.home_score}</td>
                                <td>{dci.home_players}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Dew Cup II</h1>
                <div>
                    <Table striped border hover>
                        <thead>
                            <th>Type</th>
                            <th>Away Team</th>
                            <th>Score</th>
                            <th>Away Players</th>
                            <th>Home Team</th>
                            <th>Score</th>
                            <th>Home Players</th>
                        </thead>
                        <tbody>
                            {dcii.map(dcii => (
                                <tr>
                                    <td>{dcii.type}</td>
                                    <td>{dcii.away_team}</td>
                                    <td>{dcii.away_score}</td>
                                    <td>{dcii.away_players}</td>
                                    <td>{dcii.home_team}</td>
                                    <td>{dcii.home_score}</td>
                                    <td>{dcii.home_players}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Dew Cup III</h1>
                    <div>
                        <Table striped border hover>
                            <thead>
                                <th>Type</th>
                                <th>Away Team</th>
                                <th>Score</th>
                                <th>Away Players</th>
                                <th>Home Team</th>
                                <th>Score</th>
                                <th>Home Players</th>
                            </thead>
                            <tbody>
                                {dciii.map(dciii => (
                                    <tr>
                                        <td>{dciii.type}</td>
                                        <td>{dciii.away_team}</td>
                                        <td>{dciii.away_score}</td>
                                        <td>{dciii.away_players}</td>
                                        <td>{dciii.home_team}</td>
                                        <td>{dciii.home_score}</td>
                                        <td>{dciii.home_players}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Buddy Wood Memorial Cup I</h1>
                        <div>
                            <Table striped border hover>
                                <thead>
                                    <th>Type</th>
                                    <th>Away Team</th>
                                    <th>Score</th>
                                    <th>Away Players</th>
                                    <th>Home Team</th>
                                    <th>Score</th>
                                    <th>Home Players</th>
                                </thead>
                                <tbody>
                                    {bwmi.map(bwmi => (
                                        <tr>
                                            <td>{bwmi.type}</td>
                                            <td>{bwmi.away_team}</td>
                                            <td>{bwmi.away_score}</td>
                                            <td>{bwmi.away_players}</td>
                                            <td>{bwmi.home_team}</td>
                                            <td>{bwmi.home_score}</td>
                                            <td>{bwmi.home_players}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Dew Cup IV</h1>
                            <div>
                                <Table striped border hover>
                                    <thead>
                                        <th>Type</th>
                                        <th>Away Team</th>
                                        <th>Score</th>
                                        <th>Away Players</th>
                                        <th>Home Team</th>
                                        <th>Score</th>
                                        <th>Home Players</th>
                                    </thead>
                                    <tbody>
                                        {dciv.map(dciv => (
                                            <tr>
                                                <td>{dciv.type}</td>
                                                <td>{dciv.away_team}</td>
                                                <td>{dciv.away_score}</td>
                                                <td>{dciv.away_players}</td>
                                                <td>{dciv.home_team}</td>
                                                <td>{dciv.home_score}</td>
                                                <td>{dciv.home_players}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Code Red Classic I</h1>
                                <div>
                                    <Table striped border hover>
                                        <thead>
                                            <th>Type</th>
                                            <th>Away Team</th>
                                            <th>Score</th>
                                            <th>Away Players</th>
                                            <th>Home Team</th>
                                            <th>Score</th>
                                            <th>Home Players</th>
                                        </thead>
                                        <tbody>
                                            {crci.map(crci => (
                                                <tr>
                                                    <td>{crci.type}</td>
                                                    <td>{crci.away_team}</td>
                                                    <td>{crci.away_score}</td>
                                                    <td>{crci.away_players}</td>
                                                    <td>{crci.home_team}</td>
                                                    <td>{crci.home_score}</td>
                                                    <td>{crci.home_players}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Games;
