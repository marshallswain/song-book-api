const users = require('./users/users.service.js');
const songs = require('./songs/songs.service.js');
const emails = require('./emails/emails.service.js');
const email = require('./email/email.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(songs);
  app.configure(emails);
  app.configure(email);
};
