import styled from "styled-components";

export const CoursesPageStyled = styled.div`
    width: 320px;
    margin: 24px auto;
    padding: 0 20px;    

    h1 {
        margin-bottom: 32px;
        text-align: center;
        font-size: 48px;
    }
    
    @media (min-width: 768px) {        
        width: 728px;
        
        h1 {            
            font-size: 60px;
        }
    }

     @media (min-width: 1064px) {        
        width: 1024px;     
        
        h1 {
            margin-bottom: 48px;            
            font-size: 78px;
        }
    }
`;

export const Pagination = styled.ul`
    display: flex;
    justify-content: center;
    gap: 16px;    

`;

export const PaginationButton = styled.button`
    width: 38px;
    height: 38px;
    padding: 0;

    border-radius: 10px;
    border: none;
    background-color: ${p => p.active ? "#c5c1c1" : "#ffffff"};

    font-size: 16px;

    cursor: pointer;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {        
        transform: scale(1.05);
    }
`;