import styled from "styled-components";

export const Sq = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-basis: 98px;
height: 100px;
border: 1px solid black;
cursor: pointer;
-webkit-transition:background-color 1s;
&:hover{
   background-color: grey;
}
`

export const P = styled.p`
font-size: 18px;
font-weight: bold;
`
export const WrapperSq = styled.div`
display: flex;
`