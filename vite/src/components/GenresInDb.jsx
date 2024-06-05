
import {Component} from 'react';
import PropTypes from 'prop-types';

class GenresInDb extends Component {
	state= {
		titlehovered:false
	}
	handleMouseEnter = ()=> {
		console.log('Evento');
		this.setState({titlehovered: !this.state.titlehovered })
	}
	
	render() {
		console.log('2.Render');
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800" onMouseEnter={this.handleMouseEnter} > Genres in Data Base</h5>
					</div>
					<div className= {`card-body ${this.state.titlehovered && "bg-secondary"}`}>
						<div className="row">
							{this.props.genre.map((element, index) => {
								return (
									<div key={index} className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												{element.name}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

		);
	}
}
GenresInDb.propTypes = {
	genre: PropTypes.array
}
GenresInDb.defaultProps = { 
	genre: []
}

export default GenresInDb;