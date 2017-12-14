// Initializes the `emails` service on path `/emails`
const createService = require('feathers-mailer')
const hooks = require('./email.hooks')

module.exports = function () {
  const app = this

  var transportOptions = {
    from: process.env.EMAIL_ADDRESS,    
    host: process.env.EMAIL_HOST,
    secureConnection: false, // TLS requires secureConnection to be false
    port: 465, // port for secure SMTP
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      ciphers: "SSLv3"
    }
  }

  // const options = {
  //   name: 'emails',
  // }

  // Initialize our service with any options it requires
  app.use('/email', createService(transportOptions))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('email')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}

