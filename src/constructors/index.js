import templateParser from '../utils/template-parser'
import { renderer } from '../utils/renderer'

const Notification = (rawTemplate, ...templateKeys) => {
  return (function(...dataValues) {
    const parsedTemplate = templateParser(rawTemplate, templateKeys, dataValues)
    renderer(parsedTemplate)
  })
}

export default Notification
