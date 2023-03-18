import { createSlice } from "@reduxjs/toolkit";
import { setCurrentWatchingLesson } from "./operations";


const initialState = {    
    currentWatchingLesson: []
};

const currentLessonsSlice = createSlice({
    name: 'currentLessons',
    initialState,
    extraReducers: (builder) => {
        builder            
            .addCase(setCurrentWatchingLesson.fulfilled, (state, action) => {               
                const i = state.currentWatchingLesson.findIndex(lesson => lesson.courseId === action.payload.courseId);
                i === -1 ? state.currentWatchingLesson.push(action.payload) : state.currentWatchingLesson.splice(i, 1, action.payload);
            })
    }
});

export const currentLessonsReducer = currentLessonsSlice.reducer;