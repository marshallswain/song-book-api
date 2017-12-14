module.exports = function () {
  return function  (context) {
      context.data.username = context.data.email.split('@')[0]
    return context
  }
}

