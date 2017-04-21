import Notification from './../../src'

// Declare notifications
const accountDeletionFail = Notification`
  -- type: warning
  -- position: top-left
  # Account Deactivation
  Oops, we're facing some issues connecting to our servers
`

const accountDeletionSuccess = Notification`
  -- type: success
  -- position: top-right
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
accountDeletionFail()

setTimeout(() => {
  accountDeletionSuccess()
}, 2000)

setTimeout(() => {
  afterAccountDeletion()
}, 4000)
