import styled from "styled-components";


export const StyledButton = styled.button`
  width : 290px;
  height : 40px;
  background: transparent;
  border-radius: 1rem;
  border: 1px solid var(--main-border-color);
  margin: 15px 0px 0px 0px;

  
  transition: all 200ms ease-in-out;
  display : flex;
  justify-content: center;
  align-items: center;
  cursor : pointer;


  color: #060606;
  font-family: var(--main-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  
  &:hover {
    filter: brightness(0.85);
  }
  
`



export const StyledInput = styled.input`
 
    width: 300px;
    height: 45px;
    box-sizing: border-box;
    flex-shrink: 0;
    fill: #FFFEFA;
    filter: drop-shadow(0px 5px 10px rgba(117, 108, 108, 0.09));
    border-radius: 16px;
    border: none;
    padding-left: 25px;
    margin : 5px 0px 10px 0px;
`

// export const StyledInputText = styled.div`

//     width: 300px;
//     height: 55px;
//     box-sizing: border-box;
//     flex-shrink: 0;
//     fill: #FFFEFA;
//     filter: drop-shadow(0px 5px 10px rgba(117, 108, 108, 0.09));
//     border-radius: 10px;
//     border: none;

// `

export const StyledLabel = styled.label`
    width : max-content;
    color: #000;
    font-family: var(--main-font-family);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    margin-bottom : 2px;
    align-self: flex-start; 
    
`

export const StyledContinueBtn = styled.button`

 
  width : 270px;
  height : 45px;
  background: linear-gradient(89deg, #FFA500 0.27%, #FFD07B 99.55%);
  border-radius: 1.2rem;
  border: none;
  margin: 10px 0px 0px 0px;
  padding: 0.5rem 0;
 
  display : flex;
  justify-content: center;
  align-items:centre;
  cursor : pointer;

color: #060606;
font-family: Jost;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
 


  &:hover {
    background: #FFA500 ;
  }

  &:active {
    background: #FFA500 ;
  }

`

export const StyledHeadingH3 = styled.h3`

    width: max-content;
    color: #000;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-top: 30px;
    margin-left : 20px;
    align-self: flex-start; 

    

`

