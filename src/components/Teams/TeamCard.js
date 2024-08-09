import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/teams.json';
import { Table } from 'react-bootstrap'
import './Card.css'

const TeamCard = () => {
  const { id } = useParams();
  const team = data.find(obj => obj.id === parseInt(id));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div style={{ marginRight: "5%", marginLeft: "5%", marginBottom: "5%" }} >
    <h1 style={{ marginLeft: "5%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit", textAlign: "center" }}>{team.name}</h1>
    <div class="column">
        <img src={team.image} width="150%" height="150%" alt="" />
    </div>
    <div class="column2">
        <Table>
            <tbody>
                <tr>
                    <th>Team Captain</th>
                    <td>{team.captain}</td>
                </tr>                
                <tr>
                    <th>Minibat Wins</th>
                    <td>{team.batswins}</td>
                </tr>
                <tr>
                    <th>Minibat Losses</th>
                    <td>{team.batslosses}</td>
                </tr>
                <tr>
                    <th>Runs</th>
                    <td>{team.runs}</td>
                </tr>
                <tr>
                    <th>Runs Against</th>
                    <td>{team.runsag}</td>
                </tr>
                <tr>
                    <th>Minibat Titles</th>
                    <td>{team.batschampionships}</td>
                </tr>
                <tr>
                    <th>Hockey Wins</th>
                    <td>{team.hockeywins}</td>
                </tr>
                <tr>
                    <th>Hockey Losses</th>
                    <td>{team.hockeylosses}</td>
                </tr>
                <tr>
                    <th>Goals</th>
                    <td>{team.goals}</td>
                </tr>
                <tr>
                    <th>Goals Against</th>
                    <td>{team.goalsag}</td>
                </tr>
                <tr>
                    <th>Hockey Titles</th>
                    <td>{team.hockeychampionships}</td>
                </tr>
            </tbody>
        </Table>
    </div>
</div>
    // <div>
    //   <h1>{team.name}</h1>
      
    //   <p>{team.hockeychampionships}</p>
    //   <img src={team.image} alt={team.name} />
    // </div>
  );
};

export default TeamCard;