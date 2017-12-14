// songs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const songs = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true},
    name: { type: String, required: true },
    composer: { type: String },
    lyricist: { type: String },
    yearCreated: {type: String },
    language: { type: String },
    haveChart: {type: String},
    keys: [String],
    instrumentations: [String],
    season: { type: String },
    rehearsedWith: { type: String },
    miscCategories: [String],
    notes: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('songs', songs);
};
