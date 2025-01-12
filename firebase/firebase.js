const admin = require('firebase-admin'); // Import Firebase Admin SDK
const serviceAccount = require('./firebaseServiceAccountKey.json'); // Path to your service account key

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin; // Export the admin instance for use in your backend
