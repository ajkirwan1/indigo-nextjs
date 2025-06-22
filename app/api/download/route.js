import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { getGoogleCredentialsFromEnv } from '@/utils/credentials/get-google-credentials';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

async function getAuth() {
  const googleCred = getGoogleCredentialsFromEnv();
  return new google.auth.GoogleAuth({ credentials: googleCred, scopes: SCOPES });
}

const mimeMap = {
  'application/pdf': 'application/pdf',
  'text/csv': 'text/csv',
  'application/vnd.ms-excel': 'text/csv',
};

export async function GET(req) {
  
  const { searchParams } = new URL(req.url);
  const fileId = searchParams.get('fileId');

  if (!fileId) {
    return new NextResponse('Missing fileId', { status: 400 });
  }

  try {
    const auth = await getAuth();
    const drive = google.drive({ version: 'v3', auth });

    // Fetch metadata
    const metadataRes = await drive.files.get({
      fileId,
      fields: 'name, mimeType',
    });

    const fileName = metadataRes.data.name ?? fileId;
    const mimeType = metadataRes.data.mimeType ?? '';
    const contentType = mimeMap[mimeType] ?? 'application/octet-stream';

    // Fetch file stream
    const fileRes = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' }
    );

    return new NextResponse(fileRes.data, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    if (error?.code === 404 || error?.response?.status === 404) {
      return new NextResponse('File not found on Google Drive', { status: 404 });
    }
    console.error('Drive file fetch failed:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
