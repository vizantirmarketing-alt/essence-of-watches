# Apple OAuth Setup Guide

This guide will help you set up Sign In with Apple for Essence of Watches.

## Prerequisites

- Apple Developer Account (paid membership required)
- Access to Apple Developer Portal

## Step 1: Create App ID

1. Go to [Apple Developer Portal](https://developer.apple.com/account/)
2. Navigate to **Certificates, Identifiers & Profiles**
3. Click **Identifiers** → **+** (Add)
4. Select **App IDs** → Continue
5. Select **App** → Continue
6. Fill in:
   - **Description**: Essence of Watches
   - **Bundle ID**: `com.essenceofwatches.app` (or your domain)
7. Enable **Sign In with Apple** capability
8. Click **Continue** → **Register**

## Step 2: Create Services ID

1. In **Identifiers**, click **+** → **Services IDs** → Continue
2. Fill in:
   - **Description**: Essence of Watches Web
   - **Identifier**: `com.essenceofwatches.web` (this is your `APPLE_ID`)
3. Enable **Sign In with Apple**
4. Click **Configure** next to Sign In with Apple
5. Add your domain:
   - **Primary App ID**: Select the App ID from Step 1
   - **Website URLs**:
     - **Domains and Subdomains**: `yourdomain.com`
     - **Return URLs**: 
       - Development: `http://localhost:3000/api/auth/callback/apple`
       - Production: `https://yourdomain.com/api/auth/callback/apple`
6. Click **Save** → **Continue** → **Register**

## Step 3: Create Key

1. Go to **Keys** → **+** (Add)
2. Fill in:
   - **Key Name**: Essence of Watches Sign In Key
3. Enable **Sign In with Apple**
4. Click **Configure** → Select your Primary App ID → **Save**
5. Click **Continue** → **Register**
6. **Download the key file** (`.p8` file) - You can only download it once!
7. Note your **Key ID** (shown on the keys page)

## Step 4: Generate Secret

You need to generate a JWT secret using your downloaded key file.

### Option 1: Using the Helper Script

1. Install dependencies:
   ```bash
   npm install jsonwebtoken
   ```

2. Update `scripts/generate-apple-secret.js` with your values:
   - `privateKeyPath`: Path to your downloaded `.p8` file
   - `teamId`: Your Apple Team ID (found in top right of Developer Portal)
   - `clientId`: Your Services ID from Step 2
   - `keyId`: Your Key ID from Step 3

3. Run the script:
   ```bash
   node scripts/generate-apple-secret.js
   ```

4. Copy the generated secret to your `.env.local` file

### Option 2: Manual JWT Generation

Use a JWT library to generate the token with these claims:

```javascript
{
  alg: 'ES256',
  kid: 'YOUR_KEY_ID',
  iss: 'YOUR_TEAM_ID',
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + 86400 * 180, // 180 days
  aud: 'https://appleid.apple.com',
  sub: 'YOUR_SERVICE_ID'
}
```

## Step 5: Environment Variables

Add to your `.env.local`:

```env
# Apple OAuth
APPLE_ID=com.essenceofwatches.web
APPLE_SECRET=your_generated_jwt_secret_here
```

## Step 6: Testing

### Local Development

Apple OAuth requires HTTPS in production. For local testing:

1. Use a tunnel service like [ngrok](https://ngrok.com/):
   ```bash
   ngrok http 3000
   ```

2. Update your Services ID return URL to use the ngrok URL:
   ```
   https://your-ngrok-url.ngrok.io/api/auth/callback/apple
   ```

3. Update `NEXTAUTH_URL` in `.env.local`:
   ```env
   NEXTAUTH_URL=https://your-ngrok-url.ngrok.io
   ```

### Production

1. Ensure your domain is verified in Apple Developer Portal
2. Use your production domain in return URLs
3. Set `NEXTAUTH_URL` to your production domain

## Troubleshooting

### "Invalid client" error
- Verify your Services ID matches `APPLE_ID`
- Check that Sign In with Apple is enabled for the Services ID
- Ensure return URLs match exactly (including protocol and trailing slashes)

### "Invalid client secret" error
- Regenerate the JWT secret (they expire after 180 days)
- Verify the key file is correct and not corrupted
- Check that Team ID, Key ID, and Service ID are correct

### Redirect URI mismatch
- Return URLs must match exactly (case-sensitive)
- Include the full path: `/api/auth/callback/apple`
- Use `https://` in production, `http://` only for localhost

## Resources

- [Apple Sign In Documentation](https://developer.apple.com/sign-in-with-apple/)
- [NextAuth.js Apple Provider](https://next-auth.js.org/providers/apple)
- [Apple Developer Portal](https://developer.apple.com/account/)




