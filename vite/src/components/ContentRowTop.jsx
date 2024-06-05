import { Component } from "react";
import ContentRowMovie from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from './LastMovieInDb'

const data = [
	{
		title: 'Movies in Data Base',
		color: 'primary',
		icon: 'fa-film',
		quantity: 21
	},
	{
		title: 'Total awards',
		color: 'success',
		icon: 'fa-award',
		quantity: 79
	},
	{
		title: 'Actors quantity',
		color: 'warning',
		icon: 'fa-user',
		quantity: 49
	},
]

const movie = {
	id: 1,
	image: 'mandalorian.jpg',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?',
}

class ContentRowTop extends Component {
	constructor(props) {		
		super(props);
		this.state = {
             genres:[],
			 movies:[]
		}
	} 
	componentDidMount() {
		fetch('http://localhost:3001/api/genres', {
			method: 'GET',
			headers:{
				'Content-type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => {					
			this.setState({genres: data.data})
		})
		.catch(e => console.log(e));

	}
	render() {
		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">JANUS Dashboard</h1>
				</div>
				{/* <ContentRowMovie data={data} />			 */}
				<div className="row">
					<LastMovieInDb data={movie} />			
					{/* <GenresInDb genre1={this.state.genres} /> */}
				</div>			
			</div>
		);
	}

}
export default ContentRowTop;