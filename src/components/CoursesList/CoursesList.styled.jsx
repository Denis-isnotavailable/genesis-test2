import styled from "styled-components";

export const CoursesListStyled = styled.ul`  

    margin-bottom: 48px;

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;        
        gap: 32px;        
        padding: 0 28px;        
    }

    @media (min-width: 1040px) {
        padding: 0;
    }
`;