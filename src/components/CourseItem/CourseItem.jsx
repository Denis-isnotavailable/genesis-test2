import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactPlayer from 'react-player';

import {
    CourseItemStyled,
    CourseImageStyled,
    ImageStyled,
    VideoStyled,
    CourseDescriptionStyled,
    CourseSkillsStyled,
    CourseLessonsAndRatingStyled,
    CourseProgressMarkStyled
} from "./CourseItem.styled";


const CourseItem = ({ course }) => {
    const currentWatchingLesson = useSelector(state => state.currentLessons.currentWatchingLesson);
    const [isInProgress, setIsInProgress] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    

    useEffect(() => {
        const isCourseinProgress = currentWatchingLesson.find(lesson => lesson.courseId === course.id);
        if (isCourseinProgress) {
            setIsInProgress(true);
        }
    }, [course.id, currentWatchingLesson]);

    const { previewImageLink, title,  lessonsCount, rating, meta, id } = course;

    return (
        <CourseItemStyled onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
            <NavLink to={id} style={{ textDecoration: "none" }}>
                {/* First want to render img or video by condition, but then decided to use display: none 
                to load video not after hovering but immediately after page was loaded
                In this case it's buffered some part */}
                <CourseImageStyled>              
                    <ImageStyled src={`${previewImageLink}/cover.webp`} alt="course poster" width={320} isShow={!isMouseOver} />
                    <VideoStyled isShow={isMouseOver}>
                        <ReactPlayer                               
                            url={meta.courseVideoPreview.link}
                            volume={0}
                            muted={false}
                            loop
                            controls // not all links works - left controls so one can see, that player is ready
                                    // 2 course 2 page - prev Video working - I have tested on this video
                            playing={true}
                            config={{
                                file: {
                                    attributes: {
                                        autoPlay: true,
                                        muted: true
                                    },
                                    hlsOptions: { 
                                        autoStartLoad: true,
                                        startPosition: -1,
                                    }
                                }
                            }}                               
                            width={'320px'}
                            height={'140px'}                            
                    />
                </VideoStyled>
                </CourseImageStyled>
                
                {isInProgress && <CourseProgressMarkStyled>IN PROGRESS</CourseProgressMarkStyled>}

                <CourseDescriptionStyled> 
                    <h2>{title}</h2>

                    <CourseLessonsAndRatingStyled>
                        <p>Lessons: <span>{lessonsCount}</span></p>            
                        <p>Rating: <span>{rating}</span></p>
                    </CourseLessonsAndRatingStyled>               

                    <h3>Skills:</h3>
                    {meta.skills ?
                        <CourseSkillsStyled>{meta.skills.map((skill, i) => <li key={i}>{skill}</li>)}</CourseSkillsStyled>
                        :
                        "no skills indicated"
                    }
                </CourseDescriptionStyled>  
                
            </NavLink>
        </CourseItemStyled>                       
    );
}

export default CourseItem;