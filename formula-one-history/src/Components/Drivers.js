import PropTypes from 'prop-types'

const Drivers = ({drivers}) => {
    return (
        <div className="flex justify-center content-center">
            <div className="bg-opacity-25 rounded">
                <ul className="px-6">
                    {drivers.map(function(driver, index){
                        return <li className=" text-white font-raleway-italic hover:text-opacity-75 " key={index}><p className="text-xl">{driver}</p></li>
                    })}
                </ul>
            </div>
        </div>
    );
};

Drivers.defaultProps = {
    drivers: ['Driver 1', 'Driver 2'],
    
};

Drivers.propTypes = {
    drivers: PropTypes.array
};

export default Drivers;