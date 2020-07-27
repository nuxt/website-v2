module.exports = [
  {
    type: 'input',
    name: 'title',
    message: 'Title:',
    validate(value) {
      if (!value.length) {
        return 'Blog must have a title.'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description:',
    validate(value) {
      if (!value.length) {
        return 'Blog must have a description.'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'date',
    message: 'Date in format- 2020-06-18:',
    validate(value) {
      if (!value.length) {
        return 'Blog must have a date.'
      }
      return true
    }
  },

  {
    type: 'input',
    name: 'authorName',
    message: 'What is the full name of the author?:',
    validate(value) {
      if (!value.length) {
        return 'Blog must have an author.'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'authorAvatar',
    message: 'What is the full avatar url of the author?:'
  },
  {
    type: 'input',
    name: 'authorLink',
    message: 'What is the twitter link of the author?:'
  },
  {
    type: 'input',
    name: 'tags',
    message: 'Add your blog post tags'
  }
]
