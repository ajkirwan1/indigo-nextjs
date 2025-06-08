// app/api/drive/files/route.ts
import { google } from 'googleapis';
import { cookies } from 'next/headers';

export async function GET() {
  const access_token = cookies().get('access_token')?.value;

  if (!access_token) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
  }

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token });

  const drive = google.drive({ version: 'v3', auth });

  const folderId = process.env.GOOGLE_FOLDER_ID;

  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType, webViewLink)',
  });

  return Response.json(res.data.files);
}
