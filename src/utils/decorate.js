import isDescriptor from './isDescriptor'

const decorate = (handleDescriptor, entryArgs) => {
  if (isDescriptor(entryArgs[entryArgs.length - 1])) {
    return handleDescriptor(...entryArgs, [])
  } else {
    return (...args) => handleDescriptor(...args, entryArgs)
  }
}

export default decorate
