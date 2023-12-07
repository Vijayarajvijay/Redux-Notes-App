import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './NoteSlice'
export default configureStore({
    reducer:{
        note:noteReducer
    }
})