import test from 'ava'
import noopDecorator from './src'

test('noopify', t => {
  let actual = true
  class A {
    @noopDecorator
    m() { actual = false }
  }
  const a = new A
  a.m()
  t.true(actual)
})
