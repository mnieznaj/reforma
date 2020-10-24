import React from 'react';
import Product from './Product/Product';
import ProductList from './allProducts.json';

const Shop = () => {
    const products = ProductList;
    const output = products.map(product => {
                    return <Product product={product}/>
                });

    return(
        <div className="shop">
            {output}
        </div>
    )
}

export default Shop;