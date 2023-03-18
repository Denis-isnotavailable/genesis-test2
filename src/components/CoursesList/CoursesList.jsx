import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseItem from "../../components/CourseItem/CourseItem";
import { getAllCourses } from "../../redux/operations";
import { CoursesListStyled } from "./CoursesList.styled";


const CoursesList = ({page}) => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses.courses);

    useEffect(() => {
        dispatch(getAllCourses())
    }, [dispatch])
    

    return (
        <CoursesListStyled>
            {courses
                .slice(courses.length - (courses.length - (page - 1) * 10), page * 10)
                .map(course => <CourseItem key={course.id} course={course} />)}
        </CoursesListStyled>                       
    );
}

export default CoursesList;