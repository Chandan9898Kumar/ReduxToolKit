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


// NOTE   -  

// createSlice function looks at all the functions that are defined in the reducers field and 
// for every case generates an action creator that uses the name of the reducer as the action type itself.

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



// What is createSlice in Redux Toolkit  ?

// createSlice is a higher order function that accepts an initial state, 
// an object full of reducer functions and a slice name. 
// It automatically generates action creators and action types that correspond to the reducers and state.

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store. 
// This function aims to reduce the boilerplate required to add data to redux in the canonical way. 
// Internally, it uses createAction and createReducer.

