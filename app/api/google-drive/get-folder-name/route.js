import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';
import { getGoogleCredentialsFromEnv } from '@/utils/credentials/get-google-credentials';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

async function getAuth() {
  const googleCred = getGoogleCredentialsFromEnv()
  const keyPath = path.join(process.cwd(), 'service-account.json');
  const keyFile = await fs.readFile(keyPath, 'utf-8');
  const credentials = JSON.parse(keyFile);

  const auth = new google.auth.GoogleAuth({
    credentials: googleCred,
    scopes: SCOPES,
  });

  return auth;
}

/**
 * Retrieves the name of a Google Drive folder by its ID.
 * @param folderId The ID of the folder to retrieve.
 * @returns The name of the folder, or null if not found.
 */
async function getFolderNameById(folderId) {
  const auth = await getAuth();
  const drive = google.drive({ version: 'v3', auth });

  try {
    const res = await drive.files.get({
      fileId: folderId,
      fields: 'id, name',
    });

    return res.data.name || null;
  } catch (error) {
    console.error(`Failed to retrieve folder name for ID ${folderId}:`, error.message);
    return null;
  }
}

// API Route Handler
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const folderId = url.searchParams.get('folderId');

    if (!folderId) {
      return new Response(JSON.stringify({ error: 'Folder ID is required' }), {
        status: 400,
      });
    }

    const folderName = await getFolderNameById(folderId);

    if (!folderName) {
      return new Response(JSON.stringify({ error: 'Folder not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ folderName }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error in API route handler:', error.message);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
