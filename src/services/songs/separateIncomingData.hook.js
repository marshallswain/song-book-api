module.exports = function () {
  return function  (context) {
    const needsSeparating = ['miscCategories', 'instrumentations', 'keys']
    needsSeparating.forEach(field => {
      if(context.data[field]){
        context.data[field] = context.data[field].split(' ')
      }
    })
    return context
  }
}
