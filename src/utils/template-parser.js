import React from 'react'
import defaultConfig from './defaults.json'

function generateConfiguration(configLines) {
  const config = {}

  configLines.forEach(line => {
    line = line.replace(/(\s?\-\-\s?)|(\s)/g, '')
    const [prop, value] = line.split(':')
    config[prop] = value
  })

  return Object.assign({}, defaultConfig, config)
}

function getTitle(templateLines) {
  const firstLine = templateLines[0].trim()
  const titleRegex = /^(#\s?)/
  const hasTitle = titleRegex.test(firstLine)

  return hasTitle ? firstLine.replace(titleRegex, '') : null
}

function parseTemplate(template) {
  let templateLines = template.split('\n').filter(line => line !== "")
  const configLines = templateLines.filter(line => /^[--]/.test(line.trim()))
  const config = generateConfiguration(configLines)
  let title
  templateLines = templateLines.slice(configLines.length)
  if (title = getTitle(templateLines)) {
    templateLines = templateLines.slice(1)
  }

  const parsedTemplate = (
    <div>
    {
      templateLines.map((line, i) => (
        <div key={i}><span>{line}</span><br /></div>
      ))
    }
    </div>
  )

  return {title, parsedTemplate, config}
}

const templateParser = (
  rawTemplate,
  templateKeys,
  dataValues
) => {
  const dict = dataValues[dataValues.length - 1] || {}
  const parsedTemplate = [rawTemplate[0]]
  templateKeys.forEach((key, index) => {
    const value = Number.isInteger(key) ? dataValues[key] : dict[key];
    parsedTemplate.push(value, rawTemplate[index + 1])
  })

  return parseTemplate(parsedTemplate.join(''))
}

export default templateParser
