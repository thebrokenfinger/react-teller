import React, {Component} from 'react'
import {unmount} from '../../utils/renderer'
import './style.css'

class Notification extends Component {
  constructor() {
    super()

    // local bindings
    this.getClassName = this.getClassName.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.notification.className += ' dissolve'
      setTimeout(() => unmount(this.props.config), 500)
    }, 2000)
  }

  getClassName() {
    const { config } = this.props
    let className = 'notification '

    switch(config.type) {
      case 'success':
      case 'warning':
      case 'error':
        return className + config.type

      case 'info':
      default:
        return className + 'info'
    }
  }

  render() {
    const {title, template, config} = this.props

    return (
      <div className={this.getClassName()} ref={e => this.notification = e}>
        {title && <p className='title'>{title}</p>}
        {this.props.template}
      </div>
    )
  }
}

export default Notification
