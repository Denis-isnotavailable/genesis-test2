import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import {
    getOneCourse,
    resetOneCourse,
    setCurrentWatchingLesson
} from "../../redux/operations";
import {
    DescriptionStyled,
    ImageThumbStyled,
    OneCoursePageStyled,
    ButtonThumbStyled
} from "./OneCoursePage.styled";
import LessonsList from "components/LessonsList/LessonsList";


const OneCoursePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const course = useSelector(state => state.courses.oneCourse);
    const isLoading = useSelector(state => state.courses.isLoading);
    const currentWatchingLesson = useSelector(state => state.currentLessons.currentWatchingLesson);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [currentLessonTime, setCurrentLessonTime] = useState(0);
    

    useEffect(() => {
        dispatch(getOneCourse(id));

        return () => dispatch(resetOneCourse());    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const i = currentWatchingLesson.findIndex(lesson => lesson.courseId === id);
        if (i !== -1) {
            setCurrentLesson(currentWatchingLesson[i]);
            setCurrentLessonTime(currentWatchingLesson[i].currentLessonTime);
        }
        else if (Object.keys(course).length !== 0) {
            const i = course.lessons.findIndex(lesson => lesson.order === 1);          
            setCurrentLesson(course.lessons[i]);
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [course]);

    useEffect(() => {
        const handleWriteCurrentLesson = () => {
            if (currentLessonTime !== 0) {
                const lesson = [];
                lesson[id] = { ...currentLesson, currentLessonTime, courseId: id };
                dispatch(setCurrentWatchingLesson({ ...currentLesson, currentLessonTime, courseId: id }));
            }
        }
        return () => handleWriteCurrentLesson();   
    
    }, [currentLesson, currentLessonTime, dispatch, id]);   

    

    const handleSetLessonData = (lesson) => {
        if (lesson.status === "unlocked") {            
            setCurrentLesson(lesson);
            setCurrentLessonTime(0);          
        };      
    }   

    const handleSetLessonTime = (time) => {
        const t = time;
        if (time !== 0 && t - currentLessonTime >= 2) {           
            setCurrentLessonTime(time);            
        };      
    }

    
    const { previewImageLink,
        description,
        title,       
        rating,
        lessons,
        duration } = course;
   
    return (
        <>{!isLoading && Object.keys(course).length !== 0 &&
        <OneCoursePageStyled>
            
            <ButtonThumbStyled to={"/"} >
                <AiOutlineArrowLeft size={24} /> GO BACK
            </ButtonThumbStyled>
                
            <ImageThumbStyled>
                <img src={`${previewImageLink}/cover.webp`} alt="course poster" width={"100%"} height={"100%"} />
            </ImageThumbStyled>
                
            <h1>{title}</h1>
            <h2>{description}</h2>                    

            <DescriptionStyled>
                <li>Lessons: <span>{lessons.reduce((acc, l) => acc = l.status === "unlocked" ? acc + 1 : acc, 0)}</span></li>
                <li>Rating: <span>{rating}</span></li>
                <li>Duration: <span>{duration} hours</span></li>
            </DescriptionStyled>

            <h3>Choose the lesson to watch</h3>
            
            <LessonsList
                lessons={lessons}                        
                currentLesson={currentLesson}
                currentLessonTime={currentLessonTime}
                handleSetLessonData={handleSetLessonData}
                handleSetLessonTime={handleSetLessonTime}
            /> 
            
        </OneCoursePageStyled>}</>            
    );
}

export default OneCoursePage;