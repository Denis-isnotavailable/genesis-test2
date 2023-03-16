import { createSlice } from "@reduxjs/toolkit";
import { getAllCourses, getOneCourse, resetOneCourse, setCurrentPage } from "./operations";


const initialState = {
    courses: [],
    oneCourse: {},
    isLoading: false,
    error: null,
    pages: [],
    currentPage: 1
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
    }
});

export const coursesReducer = coursesSlice.reducer;