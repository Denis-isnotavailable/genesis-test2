import { createSlice } from "@reduxjs/toolkit";
import { getAllCourses, getOneCourse, resetOneCourse, setCurrentWatchingLesson, setCurrentPage } from "./operations";


const initialState = {
    courses: [],
    oneCourse: {},
    isLoading: false,
    error: null,
    pages: [],
    currentPage: 1,
    currentWatchingLesson: []
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCourses.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(getAllCourses.fulfilled, (state, action) => {
                state.courses = action.payload;                    
                state.isLoading = false;
                state.error = null;
                state.pages = [...Array(Math.ceil(action.payload.length / 10) + 1).keys()].slice(1);
            })
            .addCase(getAllCourses.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getOneCourse.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(getOneCourse.fulfilled, (state, action) => {
                    state.oneCourse = action.payload;                  
                    state.isLoading = false;
                    state.error = null;
            })
            .addCase(getOneCourse.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(resetOneCourse.fulfilled, (state, action) => {                
                state.oneCourse = action.payload;
            })
            .addCase(setCurrentPage.fulfilled, (state, action) => {                
                state.currentPage = action.payload;
            })
            .addCase(setCurrentWatchingLesson.fulfilled, (state, action) => {
                // console.log("action.payload", action.payload);
                const i = state.currentWatchingLesson.findIndex(lesson => lesson.courseId === action.payload.courseId);
                i === -1 ? state.currentWatchingLesson.push(action.payload) : state.currentWatchingLesson.splice(i, 1, action.payload);
            })
    }
});

export const coursesReducer = coursesSlice.reducer;