module.exports = function () {
  return function  (context) {
    const {app} = context
    const {data} = context.result

    function randomlyGeneratedPassword() {
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var text = ''
        for (var i = 0; i < 12; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length))   
        }
        return text
    }

    if(data.length){
        const emailAddress = data[0].emailAddress
        return app.service('users').find({query: {email:emailAddress}}).then(res => {
            const foundUser = res.data[0]
            const randomPassword = randomlyGeneratedPassword()
            return app.service('users').patch(foundUser._id, {password: randomPassword})
            .then(() => {
                const email = {
                    from: 'songbookemailrecovery@gmail.com',
                    to: emailAddress,
                    subject: 'Song Book Password Recovery',
                    html: `Your password has been changed to ${randomPassword}. You can use this password to login, and may change it by going into the 'Settings' menu.`
                }
                return app.service('email').create(email)
                .then(() => {
                    return context
                })
            })
        })
        
    }
  }
}
