import styled from 'styled-components';
import signUpBackground from '../../assets/sign-up-background.png';
import {shade} from 'polished'

export const Container = styled.div`
  height: 100vh;
  display:flex;
  align-items:stretch;
`


export const Content = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;

  place-content: center;// substitui justify-content e align-items

  width: 100%;
  max-width:700px;

  form{
    margin: 80px 0;
    width: 340px;
    text-align:center;

    h1{
      margin-bottom:24px;

    }
    

    

    a {
      color: #F4ede8;
      display:block;
      margin-top: 24px;
      text-decoration:none;
      transition:200ms;
      &:hover{
        color: ${shade(0.2, '#F4ede8')}
      }
    }
   
  }
  > a {
      color: #F4EDe8;
      display:block;
      text-decoration:none;
      transition:200ms;
      display:flex;
      align-items:color-interpolation-filters;
      &:hover{
        color: ${shade(0.2, '#F4EDe8')}
      }
      svg{
        margin-right:16px;
      }
    }
`


export const Background = styled.div`
  flex:1;
  background: url(${signUpBackground}) no-repeat center;
  background-size:cover;
`