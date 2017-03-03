import decorate from './utils/decorate'

const handleDescriptor = (target, key, descriptor, [comparator = true]) => {
  if (typeof descriptor.value !== 'function') {
    throw new SyntaxError('Only functions can be noop')
  }

  const callback = descriptor.value.bind(target)
  const condi = typeof comparator === 'function' ? comparator() : comparator

  return {
    ...descriptor,
    value(...args) {
      if (!condi) {
        return callback(...args)
      }
    },
  }
}

const noopDecorator = (...args) => {
  return decorate(handleDescriptor, args)
}

export default noopDecorator
