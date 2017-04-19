import templateParser from '../utils/template-parser'
import {mount} from '../utils/renderer'

const Notification = (rawTemplate, ...templateKeys) => {
  return (function(...dataValues) {
    mount(templateParser(rawTemplate, templateKeys, dataValues))
  })
}

export default Notification
