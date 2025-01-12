const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: function () {
        return !this.googleId; // Password is required only if Google ID is not present
      },
    },
    savedBuilds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Build' }],
    googleId: { type: String }, // For Google users
    profilePicture: { type: String }, // Optional profile picture for Google users
  },
  { timestamps: true }
);

// Hash password before saving (only for manual registration users)
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next(); // Skip hashing if password is not modified or absent
  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash password
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare entered password with hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
