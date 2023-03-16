import { NavLink } from "react-router-dom";

import {
    CourseItemStyled,
    CourseImageStyled,
    CourseDescriptionStyled,
    CourseSkillsStyled,
    CourseLessonsAndRatingStyled
} from "./CourseItem.styled";


const CourseItem = ({ course }) => {

    const { previewImageLink, title,  lessonsCount, rating, meta, id } = course;

    return (
        <CourseItemStyled>
            <NavLink to={id} style={{ textDecoration: "none" }}>

                <CourseImageStyled>
                    <img src={`${previewImageLink}/cover.webp`} alt="course poster" width={320} />
                </CourseImageStyled>             

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