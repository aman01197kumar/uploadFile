import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for items in fileUploadArray
interface FileUploadItem {
  id: string;
  // Add other properties as needed
}

// Define the state interface
interface FileUploadState {
  fileUploadArray: FileUploadItem[];
}

// Define the initial state
const initialState: FileUploadState = {
  fileUploadArray: [],
};

export const fileUploadSlice = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {
    pushUploadedFile: (state, action: PayloadAction<FileUploadItem>) => {
      state.fileUploadArray.push(action.payload);
    },
  },
});

export const { pushUploadedFile } = fileUploadSlice.actions;
export default fileUploadSlice.reducer;
