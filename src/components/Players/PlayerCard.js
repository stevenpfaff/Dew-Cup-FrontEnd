import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/playerstats.json';
import { Table } from 'react-bootstrap'
import './Card.css'

const PlayerCard = () => {
  const { id } = useParams();
  const player = data.find(obj => obj.id === parseInt(id));

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%" }} >
    <div class="column">
    <h1 style={{ marginLeft: "5%", marginBottom: "5%", marginTop: "10%", fontFamily: "inherit", textAlign: "right" }}>{player.name}</h1>
        <img src={player.image} width="150%" height="150%" alt="" />
    </div>
    <div class="column2">
    <h1 style={{ marginLeft: "5%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit", textAlign: "center" }}>Career Stats</h1>
        <Table>
            <tbody>
                <tr>
                    <th>Minibat Games</th>
                    <td>{player.mbgames}</td>
                </tr>
                <tr>
                    <th>At Bats</th>
                    <td>{player.ab}</td>
                </tr>
                <tr>
                    <th>Hits</th>
                    <td>{player.hits}</td>
                </tr>
                <tr>
                    <th>Batting Average</th>
                    <td>.{player.average}</td>
                </tr>
                <tr>
                    <th>Doubles</th>
                    <td>{player.doubles}</td>
                </tr>
                <tr>
                    <th>Triples</th>
                    <td>{player.triples}</td>
                </tr>
                <tr>
                    <th>Homeruns</th>
                    <td>{player.homeruns}</td>
                </tr>
                <tr>
                    <th>RBI's</th>
                    <td>{player.rbi}</td>
                </tr>
                <tr>
                    <th>Hockey Games</th>
                    <td>{player.hgames}</td>
                </tr>
                <tr>
                    <th>Goals</th>
                    <td>{player.goals}</td>
                </tr>
                <tr>
                    <th>Assists</th>
                    <td>{player.assists}</td>
                </tr>
                <tr>
                    <th>Points</th>
                    <td>{player.points}</td>
                </tr>
            </tbody>
        </Table>
    </div>
</div>
  );
};

export default PlayerCard;