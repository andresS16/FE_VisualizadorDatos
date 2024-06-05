import PropTypes from 'prop-types'

function MovieList (props) {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.idProduct}</td>
            <td>{props.amount}</td>      
        </tr>
    )
}

MovieList.propTypes = { 
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    idProduct: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
   amount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
}

export default MovieList;