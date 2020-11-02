import styled from "styled-components";
import {Link} from "react-router-dom"
export const Button = styled.button`
   text-align: center;
   width: 100%;
   height: 100%;
   background-color: #eae0c2;
   border-radius: 5px;
   outline: none;
   border: none;
   cursor: pointer;
`
export const WrapperButton = styled.div`
position: fixed;
width: 200px;
height: 100px;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%);
`
export const P = styled.p`
font-size: 16px;
`