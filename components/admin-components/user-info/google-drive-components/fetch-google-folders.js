// utils/fetchGoogleFolders.js

export const fetchGoogleFolders = async (
    registration,
    googleDriveFolderId,
    setState,
    setGoogleFolders,
    setOriginalGoogleFolders
  ) => {
    let apiEndpoint;
  
    if (registration === "accepted") {
      apiEndpoint = `/api/google-drive/get-folder-name?folderId=${googleDriveFolderId}`;
    } else if (registration === "typeB") {
      apiEndpoint = "https://api.example.com/foldersTypeB";
    } else {
      console.log("Invalid registration type");
      return;
    }
  
    try {
      setState((prev) => ({ ...prev, isFetching: true }));
      const response = await fetch(apiEndpoint);
      console.log(response, "RESPONSE");
      if (!response.ok) {
        throw new Error("API call failed");
      }
  
      const data = await response.json();
      console.log(data, "DATA");
      if (data.folderName) {
        setGoogleFolders(data.folderName); // Set the fetched folders in state
        setOriginalGoogleFolders(data.folderName); // Store the original folder value
      }
    } catch (error) {
      console.error("Error fetching folders:", error);
    } finally {
      setState((prev) => ({ ...prev, isFetching: false }));
    }
  };
  