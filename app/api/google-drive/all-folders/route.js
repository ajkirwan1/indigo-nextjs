// app/api/drive/files/route.js

import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';

// Define the SCOPES for Google Drive access
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

// This function handles authentication using the service account credentials
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

// The function to list files (folders in this case) from Google Drive
async function listDriveFiles() {
  const auth = await getAuth();
  const drive = google.drive({ version: 'v3', auth });

  const res = await drive.files.list({
    q: "mimeType = 'application/vnd.google-apps.folder'", // Query for folders only
    pageSize: 10, // You can adjust this to a higher number if you need more results
    fields: 'files(id, name)', // Only return file id and name
  });

  return res.data.files || [];
}

// Route handler for GET requests at /api/drive/files
export async function GET(request) {
  try {
    const files = await listDriveFiles();
    
    // Return the list of files as JSON
    return new Response(JSON.stringify({ files }), { status: 200 });
  } catch (error) {
    console.error('Error listing Google Drive files:', error);
    
    // Return an error response if something goes wrong
    return new Response(
      JSON.stringify({ error: 'Failed to list Google Drive files' }),
      { status: 500 }
    );
  }
}
