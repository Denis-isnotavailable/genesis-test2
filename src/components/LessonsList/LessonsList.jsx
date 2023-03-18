import { useRef } from "react";
import { AiFillUnlock, AiFillLock } from "react-icons/ai";
import ReactPlayer from 'react-player';

import {
    LessonItemStyled,
    LessonsListStyled,
    LessonDescriptionStyled,
    VideoStyled
} from "./LessonsList.style";


const LessonsList = ({
    lessons,
    currentLesson,
    currentLessonTime,
    handleSetLessonData,
    handleSetLessonTime }) => {
    const player = useRef();
   
    return (
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
                        
    );
}

export default LessonsList;