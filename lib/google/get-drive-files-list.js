/** @format */
"use server";

import { google } from "googleapis";
import { getGoogleCredentialsFromEnv } from '@/utils/credentials/get-google-credentials';

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

/**
 * Handles Google Auth initialization from local service-account.json.
 * Consider replacing with env-based credentials for production.
 */
async function getAuth() {
  
  try {
    const googleCred = getGoogleCredentialsFromEnv()
    return new google.auth.GoogleAuth({
      credentials: googleCred,
      scopes: SCOPES,
    });
  } catch (err) {
    console.error("❌ Failed to load Google service account credentials:", err);
    throw new Error("Authentication configuration error.");
  }
}

/**
 * Lists files from a specific folder in Google Drive.
 */
export async function listFilesInFolder(folderId) {
  try {
    const auth = await getAuth();
    const drive = google.drive({ version: "v3", auth });

    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      orderBy: "createdTime desc",
      fields: "files(id, name, mimeType, createdTime)",
    });

    return {
      files: res.data.files || [],
      errorMessage: "",
      success: true,
    };
  } catch (error) {
    console.error("❌ Google Drive API error:", error);

    return {
      files: [],
      errorMessage: "Failed to list files in Google Drive.",
      success: false,
    };
  }
}
