import React from "react";
import Product from "../components/Product";

class ProductsPage extends React.Component {
 
    render() {
        console.log('render recepcion datos api')  
        return (
         
            <Product/>
        );
    }

}

export default ProductsPage;