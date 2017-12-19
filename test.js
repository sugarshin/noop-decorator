import test from 'ava'
import noopDecorator from './src'

test('noopify instance method', t => {
  let actual = true
  class A {
    @noopDecorator
    m() { actual = false }
  }
  const a = new A
  a.m()
  t.true(actual)
})

test('noopify with comparator', t => {
  let actual = true
  class A {
    @noopDecorator(true)
    m() { actual = false }
  }
  const a = new A
  a.m()
  t.true(actual)
})

test('noopify with comparator function', t => {
  let actual = true
  const comparator = () => 1 === 1
  class A {
    @noopDecorator(comparator)
    m() { actual = false }
  }
  const a = new A
  a.m()
  t.true(actual)
})

test('not noopify with comparator function having parameters', t => {
  let actual = true
  const comparator = parameter => parameter
  class A {
    @noopDecorator(comparator)
    m(parameter) { actual = parameter }
  }
  const a = new A
  a.m(false)
  t.false(actual)
})

test('not noopify', t => {
  let actual = true
  class A {
    @noopDecorator(false)
    m() { actual = false }
  }
  const a = new A
  a.m()
  t.false(actual)
})

test('noopify class method', t => {
  let actual = true
  class A {
    @noopDecorator
    static cm() { actual = false }
  }
  A.cm()
  t.true(actual)
})

test('throw syntax error', t => {
  const error = t.throws(() => {
    class A {
      @noopDecorator
      get g() { return 1 }
    }
    new A
  }, SyntaxError)
  t.is(error.message, 'Only functions can be noop')
})
