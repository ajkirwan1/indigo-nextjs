import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import { getGoogleCredentialsFromEnv } from '@/utils/credentials/get-google-credentials';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];


async function getAuth() {
  const googleCred = getGoogleCredentialsFromEnv()
  const keyPath = path.join(process.cwd(), 'service-account.json');
  const keyFile = await fs.readFile(keyPath, 'utf-8');
  const credentials = JSON.parse(keyFile);

  return new google.auth.GoogleAuth({
    credentials: googleCred,
    scopes: SCOPES,
  });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const fileId = searchParams.get('fileId');

  if (!fileId) {
    return new NextResponse('Missing fileId', { status: 400 });
  }

  const auth = await getAuth();
  const drive = google.drive({ version: 'v3', auth });

  // Get file metadata to determine MIME type
  const metadataRes = await drive.files.get({
    fileId,
    fields: 'name, mimeType',
  });

  const fileName = metadataRes.data.name || `${fileId}`;
  const mimeType = metadataRes.data.mimeType;

  // Stream the file content
  const fileRes = await drive.files.get(
    { fileId, alt: 'media' },
    { responseType: 'stream' }
  );

  // Determine content type (use known or default fallback)
  let contentType = 'application/octet-stream';
  if (mimeType === 'application/pdf') {
    contentType = 'application/pdf';
  } else if (
    mimeType === 'text/csv' ||
    mimeType === 'application/vnd.ms-excel' // Some CSVs may have this
  ) {
    contentType = 'text/csv';
  }

  return new NextResponse(fileRes.data, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `inline; filename="${fileName}"`,
    },
  });
}

