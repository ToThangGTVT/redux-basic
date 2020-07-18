import React, { Component } from 'react';
import { store } from '../store/index'
import { addClick } from '../action'
import { connect } from 'react-redux';

let counter = 0

class Button extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  handleClick = () => {
    this.props.dispathButton(this.myRef.value)
  }

  render() {
    return (
      <div>
        <input ref={(input) => { this.myRef = input }}></input>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    dispathButton: (val) => { store.dispatch(addClick(val)) }
  }
}

export default connect(mapDispatchToProps)(Button);