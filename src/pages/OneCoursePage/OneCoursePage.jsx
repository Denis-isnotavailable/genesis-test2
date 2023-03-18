import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillUnlock, AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import ReactPlayer from 'react-player';

import {
    getOneCourse,
    resetOneCourse,
    setCurrentWatchingLesson
} from "../../redux/operations";
import {
    DescriptionStyled,
    ImageThumbStyled,
    LessonItemStyled,
    LessonsListStyled,
    OneCoursePageStyled,
    VideoStyled,
    ButtonThumbStyled, 
    LessonDescriptionStyled
} from "./OneCoursePage.styled";


const OneCoursePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const course = useSelector(state => state.oneCourse);
    const isLoading = useSelector(state => state.isLoading);
    const currentWatchingLesson = useSelector(state => state.currentWatchingLesson);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [currentLessonTime, setCurrentLessonTime] = useState(0);   
    const player = useRef();     
    

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
            console.log("work redux");
        }
        else if (Object.keys(course).length !== 0) {
            const i = course.lessons.findIndex(lesson => lesson.order === 1);          
            setCurrentLesson(course.lessons[i]); 
            console.log("work state");
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
            console.log(currentLessonTime);
        };      
    }

    
    const { previewImageLink,
        description,
        title,       
        rating,
        lessons,
        duration } = course;
   
    return (
        <>
        {!isLoading && Object.keys(course).length !== 0 &&
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
                
            <LessonsListStyled>
                    {[...lessons]
                        .sort((lesson1, lesson2) => lesson1.order - lesson2.order)
                        .map(lesson =>
                        <LessonItemStyled
                            key={lesson.id}
                            onClick={() => handleSetLessonData(lesson)}
                            status={lesson.status === "unlocked" && lesson.link}
                        >
                            <LessonDescriptionStyled>
                                <div>{lesson.status === "unlocked" && lesson.link ? <AiFillUnlock size={38} /> : <AiFillLock size={38} />}</div>
                                <h4>Lesson {lesson.order}: {lesson.title}</h4>
                            </LessonDescriptionStyled>
                            
                                
                            {currentLesson?.order === lesson?.order &&
                            lesson?.status !== "locked" && lesson.link &&
                            <VideoStyled>
                                <ReactPlayer
                                    ref={player}
                                    url={lesson.link}                                                
                                    muted={true}    
                                    pip={true}
                                    stopOnUnmount={false}
                                    config={{
                                        file: {
                                            hlsOptions: { 
                                                autoStartLoad: true,
                                                startPosition: currentLessonTime,                                                    
                                            }}
                                    }}
                                    controls                                
                                    width={'100%'}
                                    onProgress={e => currentLesson?.order === lesson?.order && handleSetLessonTime(e.playedSeconds)}
                                />
                            </VideoStyled>}
                        </LessonItemStyled>)}
            </LessonsListStyled> 
            
        </OneCoursePageStyled>}
        </>
                        
    );
}

export default OneCoursePage;