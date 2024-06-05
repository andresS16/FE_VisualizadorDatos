import React from "react";
import Movie from "../components/Movie";

class MoviesPage extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        
            fetch('https://localhost:7097/api/Stock/obtenertodos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {                        
                this.setState({ movies: data });
            })
            .catch(error => console.log(error));
    }
    render() {
        console.log('render recepcion datos api')  
        return (
           
            <Movie movies={this.state.movies} />
        );
    }

}

export default MoviesPage;