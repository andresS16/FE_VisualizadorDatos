
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import { useContext } from 'react';
import { InitDataContext } from '../context/InitDataContext';

function Product () {
    const {products} = useContext(InitDataContext);
  
        return (
            <>             
                <h1 className="h3 mb-2 text-gray-800 ">Reporte de stock</h1>    
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>IdProducto</th>
                                        <th>Cantidad</th>                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products?.data?.map((product, index) => {
                                            return <ProductList {...product} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>


        )
}


Product.propTypes = {
    products: PropTypes.array.isRequired
};

Product.defaultProps = {
    products: []
}
export default Product;