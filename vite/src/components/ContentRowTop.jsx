import BarChart from './BarChart'
import { InitDataContext } from '../context/InitDataContext';
import { useContext } from 'react';

function ContentRowTop () {
	const {products} = useContext(InitDataContext);

		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">JANUS Dashboard</h1>
				</div>
				{/* <ContentRowProduct data={data} />*/}
				<div className="row">						
					<BarChart datosx={products.map(p => p.productName)}  datosy={products.map(p => p.amount)} labelName="toneladas"/>
				   <BarChart datosx={products.map(p => p.productName)}  datosy={products.map(p => p.productPrice)} labelName="Precio en USD por tn/metrica"/> 
				</div>			
			</div>
		);  
}

export default ContentRowTop;