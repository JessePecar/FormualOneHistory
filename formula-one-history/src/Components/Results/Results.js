
import Card from '../Universal/Card.js'
import RaceResult from './RaceResult.js'
import React from 'react'

class Results extends React.Component{
    constructor(){
        super();
        this.raceResults = [
            {raceName: "Bahrain GP", location: "Sakhir, Bahrain", winner: "Lewis Hamilton", winningTeam: "Mercedes AMG Petronas", raceTime: "1:28:46.058", fastLap:"1:46.058"},
            {raceName: "Emilia Romagna GP", location: "Imola, Italy", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
            {raceName: "Portuguese GP", location: "Portimão, Portugal", winner: "Lewis Hamilton", winningTeam: "Mercedes AMG Petronas", raceTime: "1:28:46.058", fastLap:"1:46.058"},
            {raceName: "Spanish GP", location: "Barcelona, Spain", winner: "Lewis Hamilton", winningTeam: "Mercedes AMG Petronas", raceTime: "1:28:46.058", fastLap:"1:46.058"},
            {raceName: "Monaco GP", location: "Monte Carlo, Monaco", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
            {raceName: "French GP", location: "Castellet, France", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
            {raceName: "Styrian GP", location: "Spielberg, Austria", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
            {raceName: "Austrian GP", location: "Spielberg, Austria", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"}
        ]

    }
    render(){
        return (
            <div className="m-12 w-full">
                <div>
                    <h1 className="mb-6 text-left font-bold text-gray-800"><span className="border-b border-gray-300 pb-2">Race Results</span></h1>
                </div>
                <Card placeholder="Search for Race...">
                    <RaceResult races={this.raceResults}></RaceResult>
                </Card>
            </div>
                
        );
    }
}

export default Results;