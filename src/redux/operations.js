import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://api.wisey.app/api/v1";

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`; 
};

const getToken = async () => {
    try {
        const { data } = await axios.get("/auth/anonymous?platform=subscriptions");
        setToken(data.token)
    } catch (e) {
        console.error(e.message);
    }
        
}

// GET COURSES PREVIEW
export const getAllCourses = createAsyncThunk("courses/getAllCourses", async (_, thunkAPI) => {
    try {
        await getToken();
        const { data } = await axios.get("/core/preview-courses");     

        return data.courses;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// GET COURSE DETAILS
export const getOneCourse = createAsyncThunk("courses/getOneCourse", async (id, thunkAPI) => {
    try {
        await getToken();
        const { data } = await axios.get(`/core/preview-courses/${id}`);      
        
        return data;
    } catch (e) {  
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// RESET COURSE DETAILS
export const resetOneCourse = createAsyncThunk("courses/resetOneCourse", () => {
    const course = {};
    return course;
});

// SET CURRRENT PAGE
export const setCurrentPage = createAsyncThunk("courses/setCurrentPage", (page) => {    
    return page;
});

// SET CURRRENT PAGE
export const setCurrentWatchingLesson = createAsyncThunk("courses/setCurrentWatchingLesson", (data) => {
    return data;
});