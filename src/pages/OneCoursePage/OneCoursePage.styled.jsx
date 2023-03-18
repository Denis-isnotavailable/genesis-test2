import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const OneCoursePageStyled = styled.div`
    width: 320px;
    margin: 24px auto;
    padding: 0 20px;

    h1 {
        margin-bottom: 28px;
        text-align: center;
        font-size: 28px;
    }

    h2, h3 {
        margin-bottom: 28px;
        text-align: center;
        font-size: 20px;
    }

    @media (min-width: 768px) {        
        width: 728px;
        
        h1 {            
            font-size: 40px;
        }

        h2 {
            font-size: 24px;
        }
    }

    @media (min-width: 1064px) {        
        width: 1024px;     
        
        h1 {
            margin-bottom: 48px;            
            font-size: 48px;
        }

        h2 {
            font-size: 28px;
        }
    }
`;

export const ImageThumbStyled = styled.div`
    width: 100%;
    height: 140px;
    margin-bottom: 24px;

    @media (min-width: 768px){
        margin-bottom: 32px;
        height: 320px;
    }

    @media (min-width: 1064px) {
        height: 450px;
    }
`;

export const DescriptionStyled = styled.ul`
    margin-bottom: 24px;
    padding: 0 20px;
    font-size: 18px;

    span {
        font-weight: 500;
    }

    @media (min-width: 768px){
        margin-bottom: 32px;
        font-size: 24px;
    }
`;

export const ButtonThumbStyled = styled(NavLink)`
    width: 108px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;

    font-weight: 700;
    font-size: 18px;
    line-height: 1.17;

    color: #000000;
`;