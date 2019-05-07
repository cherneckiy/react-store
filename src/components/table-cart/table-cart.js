import React, { Component } from 'react'
import { TableCartItem } from './index'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as PropTypes from 'prop-types'
import { fetchProducts } from '../../actions'
import WithServices from '../hoc/with-services'

class TableCart extends Component {
  componentDidMount () {
    this.props.fetchProducts()
  }

  render () {
    let { productsInCart, total } = this.props

    if (productsInCart === undefined || productsInCart.length === 0) {
      return <h1 className='text-center m-5'> Your cart is empty </h1>
    }
    const tableRow = productsInCart.map((product, idx) => (
      <TableCartItem key={product.id} {...product} index={idx} />
    ))

    return (
      <table className='table m-5'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Price</th>
            <th scope='col'>Count</th>
            <th scope='col'>Total</th>
            <th scope='col' />
          </tr>
        </thead>

        <tbody>
          {tableRow}
          <tr className='thead-light'>
            <th scope='row' />
            <th scope='row' />
            <th scope='row' />
            <th scope='row' />
            <th scope='row' />
            <th scope='row'>total: {total}$</th>
          </tr>
        </tbody>
      </table>
    )
  }
}

TableCart.propTypes = {
  productsInCart: PropTypes.array,
  fetchProducts: PropTypes.any,
  total: PropTypes.number
}

const mapStateToProps = ({ cart: { productsInCart, total } }) => {
  return { productsInCart, total }
}

const mapDispatchToProps = (dispatch, { services }) => {
  return {
    fetchProducts: fetchProducts(services, dispatch)
  }
}

export default compose(
  WithServices(),
  connect(mapStateToProps, mapDispatchToProps)
)(TableCart)
