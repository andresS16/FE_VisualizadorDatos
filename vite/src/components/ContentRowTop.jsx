import { Component } from "react";

class ContentRowTop extends Component {
	componentDidMount() {
		fetch('https://localhost:7097/api/Products/obtenertodos', {
			method: 'GET',
			headers:{
				'Content-type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => {					
			this.setState({products: data})
		})
		.catch(e => console.log(e));

	}
	render() {
		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">JANUS Dashboard</h1>
				</div>
				{/* <ContentRowProduct data={data} />			 */}
				<div className="row">
					{/* <Componente data={data1} />			 */}
				</div>			
			</div>
		);
	}

}
export default ContentRowTop;