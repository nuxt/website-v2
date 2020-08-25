module.exports = [
  {
    type: 'input',
    name: 'filename',
    message: 'filename:',
    validate(value) {
      if (!value.length) {
        return 'Resource must have a filename.'
      }
      return true
    }
  }
]
