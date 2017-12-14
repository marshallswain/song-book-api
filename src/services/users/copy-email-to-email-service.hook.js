module.exports = function () {
  return function  (context) {
        const {app} = context
        
        return app.service('emails').create({emailAddress: context.data.email}) 
        .then(res => {
            return context
        })   
  }
}
