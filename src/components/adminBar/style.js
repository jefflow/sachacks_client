import styled from "styled-components";

export const StyledAdminBar = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 60%;
    max-width: 30rem;
    background: #273244;
    z-index: 9999;
`;

export const StyledClose = styled.button`
    color: white;
    font-size: 1.3rem;
    height: 6.5rem;
    width: 100%;
    background: none;
    border: none;
    padding: 2.5rem;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
`;

export const StyledAdminHeader = styled.h2`
    font-size: 2.8rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: 400;
    padding: 0 2rem;
    line-height: 1.1;
    margin: 2.5rem 0;
`;
export const StyledAdminHeaderBold = styled.span`
    font-weight: bold;
`;

export const StyledAdminLink = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1rem;
    padding: 1.3rem 2rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: #3b4b64;
    }
`;

export const StyledLinkIcon = styled.img`
    margin-right: 1.5rem;
`;

export const StyledLinkLabel = styled.p`
    color: white;
    font-size: 1.7rem;
`;
