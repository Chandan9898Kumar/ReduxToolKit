import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  landingPage: true,
  ProgressPages: false,
  downloadPage: false,
  selectedOption: "tango",
  appName: "google",
  checkRequest: true,
  requestValue: 64,
  apiData: [],
  clientIp: "12.1234.33.12345",
  id: "",
  title: "",
};

//  Here we don't need to pass dispatch function with type,createSlice itself create type.
//  we just need to create a function and export it. And import these functions in your files.
const sessionSlice = createSlice({
  name: "sessionRecord",
  initialState,
  reducers: {
    apiDataFun(state, action) {
      return {
        ...state,
        apiData: action.payload,
      };
    },
    setAppName(state, action) {
      return {
        ...state,
        appName: action.payload,
      };
    },

    setClientIp(state, action) {
      return {
        ...state,
        clientIp: action.payload,
      };
    },
    setSelectorOption(state, action) {
      return {
        ...state,
        selectedOption: action.payload,
      };
    },
    checkRequest(state, action) {
      return {
        ...state,
        checkRequest: action.payload,
      };
    },
    setRequestValue(state, action) {
      return {
        ...state,
        requestValue: action.payload,
      };
    },
    startSession(state, action) {
      return {
        ...state,
        landingPage: false,
        ProgressPages: true,
        downloadPage: false,
        id: action.payload.id,
        title: action.payload.title,
      };
    },

    stopSessionRecord(state,action){
        return{
            ...state,
            landingPage: false,
            ProgressPages: false,
            downloadPage: true,
            title: action.payload.title

        }
    }
  },
});

// export const actions = sessionSlice.actions     OR

export const {
  apiDataFun,
  setAppName,
  setClientIp,
  setSelectorOption,
  checkRequest,
  setRequestValue,
  startSession,
  stopSessionRecord
} = sessionSlice.actions;


//  Import below in Store file.
export default sessionSlice.reducer;
