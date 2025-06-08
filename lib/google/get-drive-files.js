import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

async function getAuth() {
  const keyPath = path.join(process.cwd(), 'service-account.json');
  const keyFile = await fs.readFile(keyPath, 'utf-8');
  const credentials = JSON.parse(keyFile);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return auth;
}

export async function listDriveFiles() {
  const auth = await getAuth();
  const drive = google.drive({ version: 'v3', auth });

  const res = await drive.files.list({
    q: "mimeType = 'application/vnd.google-apps.folder'",
    pageSize: 10,
    fields: 'files(id, name)',
  });

  return res.data.files || [];
}
