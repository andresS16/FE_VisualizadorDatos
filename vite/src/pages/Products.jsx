import React from "react";
import Product from "../components/Product";

class ProductsPage extends React.Component {
    state = {
        products: []
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
                this.setState({ products: data });
            })
            .catch(error => console.log(error));
    }
    render() {
        console.log('render recepcion datos api')  
        return (
           
            <Product products={this.state.products} />
        );
    }

}

export default ProductsPage;