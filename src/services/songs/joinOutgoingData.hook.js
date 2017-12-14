module.exports = function () {
  return function  (context) {
    const needsJoining = ['miscCategories', 'instrumentations', 'keys']
    
  if(context.method === 'find'){
    needsJoining.forEach(field => {
      context.result.data.forEach(song => {
        if(song[field]){
           song[field] = song[field].join(' ')
        }
       })
    })
  }
  if(context.method === 'get'){
    needsJoining.forEach(field => {
      context.result[field] = context.result[field].join(' ')
    })
  }
  

   return context
  }
}
