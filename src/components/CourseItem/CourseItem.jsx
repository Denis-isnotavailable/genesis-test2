import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
    CourseItemStyled,
    CourseImageStyled,
    CourseDescriptionStyled,
    CourseSkillsStyled,
    CourseLessonsAndRatingStyled,
    CourseProgressMarkStyled
} from "./CourseItem.styled";


const CourseItem = ({ course }) => {
    const currentWatchingLesson = useSelector(state => state.currentLessons.currentWatchingLesson);
    const [isInProgress, setIsInProgress] = useState(false);

    useEffect(() => {
        const isCourseinProgress = currentWatchingLesson.find(lesson => lesson.courseId === course.id);
        if (isCourseinProgress) {
            setIsInProgress(true);
        }
    }, [course.id, currentWatchingLesson]);

    const { previewImageLink, title,  lessonsCount, rating, meta, id } = course;

    return (
        <CourseItemStyled>
            <NavLink to={id} style={{ textDecoration: "none" }}>

                <CourseImageStyled>
                    <img src={`${previewImageLink}/cover.webp`} alt="course poster" width={320} />
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