// generate-apple-secret.js
// Helper script to generate Apple OAuth secret
// Usage: node scripts/generate-apple-secret.js

const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Configuration - Update these values
const privateKeyPath = './AuthKey_XXXXXX.p8'; // Path to your downloaded Apple key file
const teamId = 'YOUR_TEAM_ID'; // Your Apple Team ID
const clientId = 'YOUR_SERVICE_ID'; // Your Apple Services ID
const keyId = 'YOUR_KEY_ID'; // Your Apple Key ID

try {
  // Read the private key file
  const privateKey = fs.readFileSync(path.resolve(privateKeyPath));

  // Generate the JWT token
  const token = jwt.sign({}, privateKey, {
    algorithm: 'ES256',
    expiresIn: '180d',
    audience: 'https://appleid.apple.com',
    issuer: teamId,
    subject: clientId,
    keyid: keyId,
  });

  console.log('\n✅ Apple Secret Generated Successfully!\n');
  console.log('Add this to your .env.local file:');
  console.log('APPLE_SECRET=' + token);
  console.log('\n');
} catch (error) {
  console.error('\n❌ Error generating Apple secret:\n');
  console.error(error.message);
  console.error('\nPlease ensure:');
  console.error('1. You have updated the configuration values in this script');
  console.error('2. The private key file path is correct');
  console.error('3. You have installed jsonwebtoken: npm install jsonwebtoken\n');
}




