import PropTypes from 'prop-types'

const Selector = ({options, title}) => {
    return(
        <div className="text-lg">
            <p className="text-gray-100 w-full text-left font-bold mb-1">{title}</p>
            <select className="w-48 text-gray-700">
                {
                    (options !== undefined) ?
                        options.map(function(option, index){
                            return <option value={index}>{option}</option>
                        }) :
                        <option>0</option>
                }
            </select>
        </div>
    );
}

Selector.defaultProps = {
    options: ["0"],
    title: "Title"
};

Selector.propTypes = {
    options: PropTypes.array,
    title: PropTypes.string
};

export default Selector