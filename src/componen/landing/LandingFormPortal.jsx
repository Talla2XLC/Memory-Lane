import { Component } from 'react'
import ReactDOM  from 'react-dom'

export default class LandingFormPortal extends Component {
  el = document.createElement('div')

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)   // children - markup incoming
  }
}

