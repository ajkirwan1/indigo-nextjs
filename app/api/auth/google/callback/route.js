import { google } from 'googleapis';
import { NextRequest } from 'next/server';

export async function GET(req) {
  const code = req.nextUrl.searchParams.get('code');

  if (!code) return new Response('Missing code', { status: 400 });

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // Store access_token in cookie
  cookies().set('access_token', tokens.access_token, {
    httpOnly: true,
    path: '/',
  });

  return new Response('Authenticated. You can now access your Drive.');
}
