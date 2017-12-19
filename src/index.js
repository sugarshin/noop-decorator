import decorate from './utils/decorate'

const descriptorValue = (comparator, cb) => (...args) => {
  const condi = typeof comparator === 'function' ? comparator(...args) : comparator

  if (!condi) {
    return cb(...args)
  }
}

const handleDescriptor = (target, key, descriptor, [comparator = true]) => {
  if (typeof descriptor.value !== 'function') {
    throw new SyntaxError('Only functions can be noop')
  }

  const callback = descriptor.value.bind(target)

  return {
    ...descriptor,
    value: descriptorValue(comparator, callback),
  }
}

const noopDecorator = (...args) => {
  return decorate(handleDescriptor, args)
}

export default noopDecorator
