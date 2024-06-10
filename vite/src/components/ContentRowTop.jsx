import { Component } from "react";
// import ContentRowMovie from "./ContentRowMovies";
// import GenresInDb from "./GenresInDb";
// import LastMovieInDb from './LastMovieInDb'



class ContentRowTop extends Component {
	// componentDidMount() {
	// 	fetch('http://localhost:3001/api/genres', {
	// 		method: 'GET',
	// 		headers:{
	// 			'Content-type': 'application/json'
	// 		}
	// 	})
	// 	.then(response => response.json())
	// 	.then(data => {					
	// 		this.setState({genres: data.data})
	// 	})
	// 	.catch(e => console.log(e));

	// }
	render() {
		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">JANUS Dashboard</h1>
				</div>
				{/* <ContentRowMovie data={data} />			 */}
				<div className="row">
					{/* <LastMovieInDb data={movie} />			 */}
					{/* <GenresInDb genre1={this.state.genres} /> */}
				</div>			
			</div>
		);
	}

}
export default ContentRowTop;