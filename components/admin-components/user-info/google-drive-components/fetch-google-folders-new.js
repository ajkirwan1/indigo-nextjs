// utils/fetchGoogleFolders.js

export const fetchGoogleFoldersNew = async (apiEndpoint) => {
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("API call failed");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching folders:", error);
      return null;
    }
  };
  