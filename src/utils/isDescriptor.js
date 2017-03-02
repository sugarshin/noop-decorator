const keys = ['value', 'initializer', 'get', 'set']
const isDescriptor = desc => {
  if (!desc || !desc.hasOwnProperty) {
    return false
  }

  return keys.some(k => desc.hasOwnProperty(k))
}

export default isDescriptor
