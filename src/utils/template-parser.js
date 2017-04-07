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

  return parsedTemplate.join('')
}

export default templateParser
