import React, { Component } from 'react'
import Product from '../../product'
import WithServices from '../../hoc/with-services'
import * as PropTypes from 'prop-types'
import Spinner from '../../spinner'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchProducts, addToCart } from '../../../actions'

class CatalogPage extends Component {
  componentDidMount () {
    let { fetchProducts, products } = this.props

    if (products.length === 0) {
      fetchProducts()
    }
  }

  render () {
    const { products, loading, addToCart } = this.props

    if (loading) {
      return <Spinner />
    }

    const productList = products.map(product => {
      return (
        <div className='col-md-4 my-4' key={product.id}>
          <Product {...product} addToCart={addToCart} />
        </div>
      )
    })

    return (
      <div className='row'> {productList} </div>
    )
  }
}

CatalogPage.propTypes = {
  services: PropTypes.any,
  fetchProducts: PropTypes.any,
  addToCart: PropTypes.any,
  products: PropTypes.array,
  loading: PropTypes.bool
}

const mapStateToProps = ({ products: { products, loading } }) => {
  return {
    products,
    loading
  }
}

const mapDispatchToProps = (dispatch, { services }) => {
  return {
    fetchProducts: fetchProducts(services, dispatch),
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default compose(
  WithServices(),
  connect(mapStateToProps, mapDispatchToProps)
)(CatalogPage)
