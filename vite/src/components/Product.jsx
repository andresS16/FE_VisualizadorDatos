import React from 'react';
import PropTypes from 'prop-types';

import ProductList from './ProductList';

class Product extends React.Component {
  
    render() {
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
                                        this.props.products.map((product, index) => {
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
}

Product.propTypes = {
    products: PropTypes.array.isRequired
};

Product.defaultProps = {
    products: []
}
export default Product;