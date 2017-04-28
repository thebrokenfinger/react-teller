import test from 'ava'
import templateParser from '../../src/utils/template-parser'
import defaultConfig from '../../src/utils/defaults.json'

const fromTaggedTpl = (tpl, ...tplKeys) => ({tpl, tplKeys})

test('should be of type `function`', t => {
  t.is(typeof templateParser, 'function')
})

test('should return object with properties `title`, `config`, `parsedTemplate`', t => {
  const { tpl, tplKeys } = fromTaggedTpl`
    -- position: top-left
    # title
    Notification content
  `
  const data = []

  const parsedTpl = templateParser(tpl, tplKeys, data)
  t.true(
    'config' in parsedTpl &&
    'title' in parsedTpl &&
    'parsedTemplate' in parsedTpl
  )
})

test('should return `title` as `null` if no title provided', t => {
  const { tpl, tplKeys } = fromTaggedTpl`
    Notification content
  `
  const data = []

  const parsedTpl = templateParser(tpl, tplKeys, data)
  t.is(parsedTpl.title, null)
})

test('should return default `config` if no config provided', t => {
  const { tpl, tplKeys } = fromTaggedTpl`
    Notification content
  `
  const data = []

  const parsedTpl = templateParser(tpl, tplKeys, data)
  t.deepEqual(parsedTpl.config, defaultConfig)
})

test('should return `parsedTemplate` of type react element of type `div`', t => {
  const { tpl, tplKeys } = fromTaggedTpl`
    Notification content
  `
  const data = []

  const parsedTpl = templateParser(tpl, tplKeys, data)
  t.is(typeof parsedTpl.parsedTemplate, 'object')
  t.is(parsedTpl.parsedTemplate.type, 'div')
})

test('should return `parsedTemplate` with filled data values', t => {
  const { tpl, tplKeys } = fromTaggedTpl`
    # Hello, ${0}!
    Notification content
  `
  const data = ['John']

  const parsedTpl = templateParser(tpl, tplKeys, data)
  t.is(parsedTpl.title, 'Hello, John!')
})
