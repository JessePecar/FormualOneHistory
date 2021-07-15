import SearchBox from '../Universal/SearchBox.js'
import RaceResult from './RaceResult.js'

const Results = () => {
    var raceResults = [
        {raceName: "Bahrain GP", location: "Sakhir, Bahrain", winner: "Lewis Hamilton", winningTeam: "Mercedes AMG Petronas", raceTime: "1:28:46.058", fastLap:"1:46.058"},
        {raceName: "Emilia Romagna GP", location: "Imola, Italy", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
        {raceName: "Portuguese GP", location: "Portimão, Portugal", winner: "Lewis Hamilton", winningTeam: "Mercedes AMG Petronas", raceTime: "1:28:46.058", fastLap:"1:46.058"},
        {raceName: "Spanish GP", location: "Barcelona, Spain", winner: "Lewis Hamilton", winningTeam: "Mercedes AMG Petronas", raceTime: "1:28:46.058", fastLap:"1:46.058"},
        {raceName: "Monaco GP", location: "Monte Carlo, Monaco", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
        {raceName: "French GP", location: "Castellet, France", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
        {raceName: "Styrian GP", location: "Spielberg, Austria", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"},
        {raceName: "Austrian GP", location: "Spielberg, Austria", winner: "Max Verstappen", winningTeam: "Redbull Honda", raceTime: "1:28:46.058", fastLap:"1:46.058"}
    ]

    return (
    <div className="m-12 w-full">
        <div>
            <h1 className="mb-6 text-left font-bold text-gray-800"><span className="border-b border-gray-300 pb-2">Race Results</span></h1>
        </div>
        <div className="shadow-lg w-full h-full p-6 bg-gray-100 rounded-md">
            <div className="flex justify-items-start ">
                <SearchBox placeholder="Search for a Race..."></SearchBox>
            </div>
            <RaceResult races={raceResults}></RaceResult>
        </div>
    </div>
    
    );
}

export default Results;