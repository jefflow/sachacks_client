import styled from "styled-components";

export const StyledNavbar = styled.nav`
    width: 100%;
    background: #273244;
    height: 6.5rem;
    display: flex;
    align-items: center;

    @media screen and (min-width: 1024px) {
        background: white;
    }
`;

export const StyledNavInner = styled.nav`
           background: #273244;
           width: 100%;
           padding-left: 2.5rem;
           display: flex;
           align-items: center;

           @media screen and (min-width: 1024px) {
               background: white;
           }
       `;

export const StyledNavContent = styled.div`
           width: 1.8rem;
           display: flex;
           flex-direction: column;
           cursor: pointer;
       `;

export const StyledNavMenu = styled.div`
           width: 1.8rem;
           height: 2px;
           border-radius: 3px;
           background: #ffffff;
           margin: 2px 0;
           

           @media screen and (min-width: 1024px) {
               background: #273244;
           }
       `;

export const StyledLabel = styled.p`
           font-size: 1.3rem;
           margin: 0 1rem;
           color: white;

           @media screen and (min-width: 1024px) {
               color: #273244;
           }
       `;

export const StyledSocialContainer = styled.div`
           width: 25rem;
           display: flex;
           align-items: center;
           justify-content: space-around;
           padding-right: 2.5rem;
       `;

export const StyledSocial = styled.div`
           color: white;
           @media screen and (min-width: 1024px) {
               color: #273244;
           }
       `;

export const StyledImg = styled.img`
    border-radius: 50px;
    width: 3.5rem;
    height: 3.5rem;
`;

export const Divider = styled.div`
    height: 27px;
    width: 2px;
    background: #536c88;
`;
