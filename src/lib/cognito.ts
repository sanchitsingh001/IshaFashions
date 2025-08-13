import { Issuer, generators } from 'openid-client';

// Cognito Configuration
export const COGNITO_CONFIG = {
  region: process.env.NEXT_PUBLIC_COGNITO_REGION || 'us-east-2',
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || 'us-east-2_FmuDsuk4V',
  clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '4im29qd8o63qdahoomn2celiv3',
  clientSecret: process.env.COGNITO_CLIENT_SECRET || '<client secret>', // Replace with your actual client secret
  domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN || 'https://d84l1y8p4kdic.cloudfront.net',
  redirectUri: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI || 'https://d84l1y8p4kdic.cloudfront.net',
  logoutUri: process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URI || '<logout uri>', // Replace with your actual logout URI
};

let client: any;

// Initialize OpenID Client
export async function initializeCognitoClient() {
  if (client) return client;
  
  try {
    const issuer = await Issuer.discover(`https://cognito-idp.${COGNITO_CONFIG.region}.amazonaws.com/${COGNITO_CONFIG.userPoolId}`);
    client = new issuer.Client({
      client_id: COGNITO_CONFIG.clientId,
      client_secret: COGNITO_CONFIG.clientSecret,
      redirect_uris: [COGNITO_CONFIG.redirectUri],
      response_types: ['code']
    });
    return client;
  } catch (error) {
    console.error('Failed to initialize Cognito client:', error);
    throw error;
  }
}

// Generate authentication URL
export function generateAuthUrl() {
  const nonce = generators.nonce();
  const state = generators.state();
  
  return {
    authUrl: client?.authorizationUrl({
      scope: 'phone openid email profile',
      state: state,
      nonce: nonce,
    }),
    nonce,
    state
  };
}

// Get logout URL
export function getLogoutUrl() {
  return `https://${COGNITO_CONFIG.domain}/logout?client_id=${COGNITO_CONFIG.clientId}&logout_uri=${COGNITO_CONFIG.logoutUri}`;
}

// Get client instance
export async function getClient() {
  if (!client) {
    await initializeCognitoClient();
  }
  return client;
} 