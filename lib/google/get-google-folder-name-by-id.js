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

/**
 * Retrieves the name of a Google Drive folder by its ID.
 * @param folderId The ID of the folder to retrieve.
 * @returns The name of the folder, or null if not found.
 */
export async function getFolderNameById(folderId) {
  await new Promise((resolve) => setTimeout(resolve, 30000));
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
