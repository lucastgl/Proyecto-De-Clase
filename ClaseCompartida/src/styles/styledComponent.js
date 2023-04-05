import { Box, TextField } from '@mui/material';
import styled, { css } from "styled-components";

export const FormContainer = styled(Box)`
    
    @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
    }
    
    margin-top: 90px;
    background: #808bb1;
    width: 450px;
    height: 60vh;
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    color: white;
    
    &::before {
        content: "";
        width: 104%;
        height: 102%;
        border-radius: 8px;
        background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -2%;
        animation: spin 2.5s linear infinite;
    }
  
    &::after {
        position: absolute;
        content: "";
        top: 10vh;
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(15vh);
        background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
        opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }
  
    @keyframes spin {
        0% {
        --rotate: 0deg;
        }
        100% {
        --rotate: 360deg;
    }
`;

export const Input = styled(TextField)`
  margin: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
  color: white;
  ::placeholder {
    color: white;
  }
`;

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;