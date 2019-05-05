import React from 'react'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import { addToCart, removeFromCart, allRemoveFromCart } from '../../actions'

const TableCartItem = ({ id, title, price, index, count, total, addToCart, removeFromCart, allRemoveFromCart }) => {
  return (
    <tr>
      <th scope='row'>{ index + 1}</th>
      <td>{ title }</td>
      <td>{ price }$</td>
      <td>{ count }</td>
      <td>{ total }$</td>
      <td>
        <button
          onClick={() => addToCart(id)}
          type='button'
          className='btn btn-sm btn-success'>
          <i className='fas fa-plus' />
        </button>
        <button
          onClick={() => removeFromCart(id)}
          type='button'
          className='btn btn-sm btn-warning'>
          <i className='fas fa-minus' />
        </button>
        <button
          onClick={() => allRemoveFromCart(id)}
          type='button' className='btn btn-sm btn-danger'>
          <i className='fas fa-trash-alt' />
        </button>
      </td>
    </tr>
  )
}

TableCartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  index: PropTypes.number,
  count: PropTypes.number,
  total: PropTypes.number,
  addToCart: PropTypes.any,
  removeFromCart: PropTypes.any,
  allRemoveFromCart: PropTypes.any
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id)),
    allRemoveFromCart: id => dispatch(allRemoveFromCart(id))
  }
}
export default connect(null, mapDispatchToProps)(TableCartItem)
