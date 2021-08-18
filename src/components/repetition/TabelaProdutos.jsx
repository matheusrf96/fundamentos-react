import React from 'react'

import products from '../../data/produtos'

const TabelaProdutos = (props) => {
    const productsList = products.map((product, i) => {
        return (
            <tr>
                <td>#{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ product.price.toFixed(2) }</td>
            </tr>
        )
    })

    return (
        <table className="styled-table">
            <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>

            { productsList }
        </table>
    )
}

export default TabelaProdutos
