import React, { Component } from 'react';
import { store } from '../store/index'
import { addClick } from '../action'
import { connect } from 'react-redux';

class List extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { item } = this.props
    if (typeof item === 'undefined') {
      return (<div></div>)
    } else {
      return (
        <div>
          {
            item.map(el => <li>{el.name}</li>)
          }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    item: state
  }
}

export default connect(mapStateToProps)(List)