import decorate from './utils/decorate'

const handleDescriptor = (target, key, descriptor, [comparator = true]) => {
  const callback = descriptor.value.bind(target)

  if (typeof callback !== 'function') {
    throw new SyntaxError('Only functions can be noop')
  }

  const condi = typeof comparator === 'function' ? comparator() : comparator

  return {
    ...descriptor,
    value(...args) {
      if (!condi) {
        return callback(...args)
      }
    }
  }
}

const noopDecorator = (...args) => {
  return decorate(handleDescriptor, args)
}

export default noopDecorator
