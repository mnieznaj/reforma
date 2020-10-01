import React from 'react';
import Product from './Product/Product';
import ProductList from './allProducts.json';

const Shop = () => {
    const products = ProductList;

    // dodać możliwość dodwania ich stąd do pamięci podręcznej
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