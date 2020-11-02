import styled from "styled-components";

export const WrapperField = styled.div`
width: 300px;
border: 1px solid black;
margin: 0 auto;
`
export const WrapperSq = styled.div`
display: flex;
`

export const H1 = styled.h1`
text-align: center;
`

export const Container = styled.div`
width: 900px;
margin: 0 auto;
`
export const ModalWindow = styled.div`
cursor: pointer;
 visibility: ${({isOpenModal})=> isOpenModal ? "visible" : 'hidden'};
position: fixed;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
top: ${({isOpenModal})=> isOpenModal ? "50%" : '-50%'};
left:50%;
transform: translate(-50%, -50%);
background-color:#ced3db;
z-index: 1;
height: 30%;
width: 30%;
transition: all 0.7s ease-in-out;
`

export const H3Modal = styled.h3`
text-align: center;
`

export const StartAgain = styled.div`
border: 2px solid #900020;
width: 200px;
height: 50px;
`
export const TextInsideButton  = styled.p`
text-align: center;
font-weight: bold;
`;

export const BoxOFSmile = styled.div`
width: 50px;
margin-top: 10px;
height: 50px;
`

export const ImgSmile = styled.img`
width: 100%;
height: 100%:
`