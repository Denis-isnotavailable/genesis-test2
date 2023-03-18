import styled from "styled-components";


export const LessonsListStyled = styled.ul``;

export const LessonItemStyled = styled.li`
    border-radius: 6px;

    background-color: ${p => p.status ? "#ffffff" : "#ed9e9e"};

    cursor: pointer;

    :not(:last-child) {
        margin-bottom: 16px;
    }

    h4 {
        margin-left: 20px;
    }

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: ${p => p.status && "#dbdbe1"};        
    }
`;

export const LessonDescriptionStyled = styled.div`
    display: flex;
    align-items: center;

    height: 48px;
`;

export const VideoStyled = styled.div`
    margin-bottom: 24px; 

    @media (min-width: 768px){
        margin-bottom: 32px;        
    }
`;