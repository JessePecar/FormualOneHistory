

const RaceResult = ({races}) => {
    return(
        <ul className="text-sm text-black font-bold mt-8 divide-y divide-gray-300 rounded-t-md border border-t-0 border-gray-300 ">
            <li className="">
                <div className="grid grid-flow-col grid-cols-3 text-red-50 bg-red-600 rounded-t-md shadow-md">
                    <p className="w-full text-left my-2 px-2">Race</p>
                    <p className="w-full text-left my-2 px-2">Winner</p>
                    <div>
                        <p className="text-left my-2 px-2">Race Time</p>
                        <p className="text-left my-2 px-2 font-normal">(Fastest Lap)</p>
                    </div>
                </div>
            </li>
            {races.map(function(race, index){
                return (<li className="">
                    <div className="grid grid-flow-col grid-cols-3 divide-x divide-gray-200">
                        <div>
                            <p className="w-full text-left my-2 px-2">{race.raceName}</p>
                            <p className="w-full text-left my-2 px-2 font-light">{race.location}</p>
                        </div>
                        <div>
                            <p className="w-full text-left my-2 px-2">{race.winner}</p>
                            <p className="w-full text-left my-2 px-2 font-light">{race.winningTeam}</p>
                        </div>
                        <div>
                            <p className="w-full text-left my-2 px-2">{race.raceTime}</p>
                            <p className="w-full text-left my-2 px-2 font-light">({race.fastLap})</p>
                        </div>
                    </div>
                </li>);
            })}
        </ul>
    );
}

export default RaceResult;