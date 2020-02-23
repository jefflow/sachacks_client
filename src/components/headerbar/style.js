import styled from 'styled-components'

export const Divider = styled.div`
           width: 95%;
           height: 2px;
           background: #b4b4b4;
           margin: 0 auto;
           ;
       `;

export const StyledHeaderBar = styled.div`
           width: 95%;
           display: flex;
           flex-direction: column;
           margin: 1rem auto;
           padding: 3rem 0;
           
           @media screen and (min-width: 1024px) {
               flex-direction: row;
           }
       `;
export const StyledHeading = styled.h1`
            width: 100%;
           color: #3b4b64;
           font-size: 3.5rem;
           display: flex;
           align-items: center;
           font-weight: 400;
            padding-right: 3.5rem;

           svg {
               margin-right: 1.6rem;
           }
       `;

export const StyledOptions = styled.div`
        display: flex;
`

export const StyledButton = styled.button`
           width: 15rem;
           height: 4rem;
           background: #3b4b64;
           color: white;
           font-size: 1.3rem;
           font-weight: bold;
           border: 1px solid #293241;
           border-radius: 2px;
           display: flex;
           align-items: center;
           justify-content: center;
           margin-left: 1.5rem;
           cursor: pointer;
           
           svg {
               margin-right: 1rem;
           }
       `;

       export const StyledButtonAlt = styled(StyledButton)`
                  background: #6c87af;
                  border: 1px solid #58709a;

                  svg {
                      margin-right: 0;
                      margin-left: 1rem;
                  }
              `;
