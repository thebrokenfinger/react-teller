import React from 'react'
import { render } from 'react-dom'
import NotificationComponent from '../components'

function createNotificationContainer() {
  const container = document.createElement('div')
  container.setAttribute('class', 'n-container')
  document.body.appendChild(container)
  return container
}

export function renderer(template /* parsed template */) {
  render(
    <NotificationComponent template={template} />,
    createNotificationContainer()
  )
}
