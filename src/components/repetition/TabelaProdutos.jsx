import React from 'react'

import products from '../../data/produtos'

const TabelaProdutos = (props) => {
    const productsList = products.map((product, i) => {
        return (
            <tr key={i}>
                <td>#{ product.id }</td>
                <td>{ product.name }</td>
                <td>R$ { product.price.toFixed(2).replace('.', ',') }</td>
            </tr>
        )
    })

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>

            <tbody>
                { productsList }
            </tbody>
        </table>
    )
}

export default TabelaProdutos
