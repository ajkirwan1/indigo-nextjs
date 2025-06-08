import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

async function getAuth() {
  const keyPath = path.join(process.cwd(), 'service-account.json');
  const keyFile = await fs.readFile(keyPath, 'utf-8');
  const credentials = JSON.parse(keyFile);

  return new google.auth.GoogleAuth({
    credentials,
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

  const res = await drive.files.get(
    { fileId, alt: 'media' },
    { responseType: 'stream' }
  );

  const stream = res.data;

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${fileId}.pdf"`,
    },
  });
}
