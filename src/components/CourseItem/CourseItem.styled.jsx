import styled from "styled-components";

export const CourseItemStyled = styled.li`
    :not(:last-child) {
        margin-bottom: 32px;
    }
    width: 320px;
    height: 480px;   

    background-color: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;    

    @media (min-width: 768px) {
        :not(:last-child) {
        margin-bottom: 0;
    }
    }
    
`;

export const CourseImageStyled = styled.div`
    width: 320px;
    height: 140px;
    margin-bottom: 24px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const CourseDescriptionStyled = styled.div`
    padding: 0 20px;

    text-align: center;
    color: #000000;

    h2 {
        height: 84px;
        margin-bottom: 12px;        
    }

    h3 {
        margin-bottom: 8px;
    }
`;

export const CourseLessonsAndRatingStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 16px;

    font-size: 18px;
    color: #575555;

    span {
        font-weight: 500;
        font-size: 20px;
        color: #000;
    }

`;

export const CourseSkillsStyled = styled.ul`
    /* overflow: hidden; */
`;