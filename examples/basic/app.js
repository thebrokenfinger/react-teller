import Notification from './../../src'

// Declare notifications
const accountDeletionFail = Notification`
  -- type: warning
  -- position: bottom-right
  # Account Deactivation
  Oops, we're facing some issues connecting to our servers

  ${'hint'}
`

const accountDeletionSuccess = Notification`
  -- type: success
  -- position: bottom-right
  # Account Deactivation
  Your account has been successfully deactivated
`

const afterAccountDeletion = Notification`
  -- type: info
  -- position: bottom-right
  # Info
  You'll now be logged out shortly
`

// Trigger notifications
accountDeletionFail({hint: 'Please try again'})

setTimeout(() => {
  accountDeletionSuccess()
}, 1000)

setTimeout(() => {
  afterAccountDeletion({onClick: () => {alert('Hello from this notification')}, position: 'bottom-left'})
}, 2000)
