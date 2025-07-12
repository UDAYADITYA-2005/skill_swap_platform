const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  profilePhoto: String,
  location: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: [String],
  publicProfile: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', UserSchema);