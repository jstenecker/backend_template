const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the authorization header is present and properly formatted
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.warn('Authorization header missing or malformed:', authHeader);
    return res.status(401).json({ message: 'Unauthorized: Missing or invalid token' });
  }

  // Extract the token from the header
  const token = authHeader.split(' ')[1];

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Log the decoded token for debugging
    console.info('Decoded token:', decoded);

    // Attach the user ID to the request object for downstream use
    req.userId = decoded.id;

    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error('Token verification failed:', error.message);

    // Differentiate between token expiration and other errors
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Unauthorized: Token has expired' });
    } else {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  }
};

module.exports = authMiddleware;
