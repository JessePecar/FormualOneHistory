import PropTypes from 'prop-types'


const Car = ({carName, drivers}) => {
    return(
        <div className="p-6 m-2 font-serif">
            <div className="rounded-lg bg-blue-900 bg-opacity-25 hover:bg-opacity-50 pb-4">
                <h1>{carName}</h1>
                <div className="flex justify-center">
                    <div className="w-1/2 border-2 rounded border-blue-900">
                        <ul className="divide-y divide-blue-900 px-6">
                            {drivers.map(function(driver, index){
                                return <li key={index}>{driver}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

Car.defaultProps = {
    carName: 'F1 Team',
    drivers: ['Driver 1', 'Driver 2']
}

Car.propTypes = {
    carName: PropTypes.string,
    drivers: PropTypes.array
}

export default Car;