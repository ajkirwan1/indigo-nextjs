// app/api/drive/list/route.ts
import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { getGoogleCredentialsFromEnv } from '@/utils/credentials/get-google-credentials';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];


async function getAuth() {
  const googleCred = getGoogleCredentialsFromEnv();

  const auth = new google.auth.GoogleAuth({
    credentials: googleCred,
    scopes: SCOPES,
  });

  return auth;
}

export async function GET() {
  try {
    const auth = await getAuth();
    const drive = google.drive({ version: 'v3', auth });

    const res = await drive.files.list({
      q: "mimeType = 'application/vnd.google-apps.folder'",
      pageSize: 10,
      fields: 'files(id, name)',
    });

    return NextResponse.json(res.data.files || []);
  } catch (error) {
    console.error('Drive API error:', error?.response?.data || error);
    return NextResponse.json(
      { error: 'Google Drive authentication failed' },
      { status: 401 }
    );
  }
}
