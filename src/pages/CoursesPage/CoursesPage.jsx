import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CoursesList from "../../components/CoursesList/CoursesList";
import { CoursesPageStyled, Pagination, PaginationButton } from "./CoursesPage.styled";
import { setCurrentPage } from "../../redux/operations";


const CoursesPage = () => {
    const dispatch = useDispatch();
    const pages = useSelector(state => state.courses.pages);
    const currentPage = useSelector(state => state.courses.currentPage);  
    const [paginationArr, setPaginationArr] = useState([]);    
    
    useEffect(() => {
        const totalPages = pages.length;
        if (totalPages <= 5) { return setPaginationArr(pages); }
        else {
            if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
                setPaginationArr(pages.slice(0, 5));
            } else if (currentPage === totalPages || currentPage === totalPages - 1 || currentPage === totalPages - 2) {
                setPaginationArr(pages.slice(totalPages - 5, totalPages));
            } else {
                setPaginationArr(pages.slice(currentPage - 3, currentPage + 2));
            }
        }
    }, [currentPage, pages]);
    

    const handlePagination = (pageValue) => {
        dispatch(setCurrentPage(pageValue));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }   
    

    return (
        <CoursesPageStyled>
            <h1>GENESIS ACADEMY</h1>
            <CoursesList page={currentPage} />
            
            <Pagination>
                {paginationArr.map(item => {
                    let isActive = item === currentPage;                    
                    return <li key={item} >
                        <PaginationButton type="button" active={isActive} onClick={() => handlePagination(item)} >
                            {item}
                        </PaginationButton>
                    </li>
                })}
            </Pagination>
        </CoursesPageStyled>
                       
    );
}

export default CoursesPage;