import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    background:  #f0f3f4  ; 
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: black;
  }
  .score {
    color: black;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    background:  #273746 ;
    color:white;
    cursor: pointer;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start:hover ,.next:hover {
    opacity:0.9;
  } 
  .start {
    max-width: 200px;
  }
  @media (max-width: 500px){
    h1 {
      font-weight: 200;
      font-size: 50px;
      text-align: center;
      margin: 20px;
    }
  }
`;