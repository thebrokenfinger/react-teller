import test from 'ava'
import configSanitizer from '../../src/utils/config-sanitizer'

test('should be of type `function`', t => {
  t.is(typeof configSanitizer, 'function')
})

test('should clear invalid `position` property', t => {
  const invalidOptions = {position: 'top-lft'}
  t.deepEqual(configSanitizer(invalidOptions), {})
})

test('should parse valid `position` property', t => {
  const validOptions = {position: 'top-left'}
  t.deepEqual(configSanitizer(validOptions), {position: 'topleft'})
})

test('should clear invalid `type` property', t => {
  const invalidOptions = {type: 'inffo'}
  t.deepEqual(configSanitizer(invalidOptions), {})
})
