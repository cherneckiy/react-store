import React from 'react'
import * as PropTypes from 'prop-types'

const Product = ({ id, title, price, coverImage, addToCart }) => {
  return (
    <div className='card'>

      <img src={coverImage} className='card-img-top' style={{ width: '100%', height: 300 }} alt='...' />

      <div className='card-body'>

        <h5 className='card-title'>{title}</h5>

        <p className='card-text'>Some quick example text to build on the card title and make
          up the bulk of the card's content.</p>

        <div className='row'>

          <div className='col-5'>
            <span>price: {price}$</span>
          </div>

          <div className='col-7 text-right'>
            <button className='btn btn-primary' onClick={() => addToCart(id)}>Add to cart</button>
          </div>

        </div>

      </div>

    </div>
  )
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  coverImage: PropTypes.string,
  addToCart: PropTypes.any
}

export default Product
