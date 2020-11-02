import React, { useState, useCallback, useEffect } from "react";
import {WrapperField, 
   WrapperSq,
   H1, 
   Container, 
   ModalWindow, 
   H3Modal, 
   StartAgain, 
   TextInsideButton} from "./StyledField"
import Square from "../../components/square/square"

const Field = () =>{
   const [isFirst, setIsfirst] = useState(true)   // Определяем чей ход
   const [arrField, setArr] = useState(Array(9).fill(null)) //   Определяем игровое поле
   const [finishGame, setFinishGame] = useState({finish:false, whoIsWinner: ""}) // Определяем конец игры и победителя

   

     const _onClick =   (i) =>{
      const sq = arrField.slice()
      if(!sq[i] && !finishGame.finish){
         sq[i] =  isFirst ? 'X' : "O"
         setIsfirst(!isFirst)
         setArr(sq)
      }
      
     }

     useEffect(()=>{
      //   Заполняем каждую игровую линию отыгранным "Square"
        let objLines = [
        {0: `${arrField[0]}${arrField[1]}${arrField[2]}`},
        {1: `${arrField[3]}${arrField[4]}${arrField[5]}`},
        {2: `${arrField[6]}${arrField[7]}${arrField[8]}`},
        {3: `${arrField[0]}${arrField[3]}${arrField[6]}`},
        {4: `${arrField[1]}${arrField[4]}${arrField[7]}`},
        {5: `${arrField[2]}${arrField[5]}${arrField[8]}`},
        {6: `${arrField[0]}${arrField[4]}${arrField[8]}`},
        {7: `${arrField[2]}${arrField[4]}${arrField[6]}`},
      ]

   let WinnerLine = objLines.find((el, index) => el[index] === "XXX" || el[index] === "OOO")    //   Находим отыгранную линию 

   if(WinnerLine){
      // Если такова есть устанавливываем стейт для дальнейшей отрисовки 
      let [isWinner] = Object.values(WinnerLine)   // получаем значение из Winnerline
      setFinishGame({
         finish: true, 
         whoIsWinner: isWinner === "XXX" ? "Player X is winner, Congratulations!" :"Player O is winner, Congratulations!" })
      
   }else if(!arrField.includes(null) && !WinnerLine){
      // Если таковой нет.....
   setFinishGame({
       finish:true,
       whoIsWinner:" There is Draw, I recommend that you play again" })
}
   }, [arrField])



     const TryAgain = useCallback(()=>{
   //   Сброс!!
   setFinishGame({finish:false})
   setIsfirst(true)
   setArr(Array(9).fill(null))
     },[setArr]) 


   return (
      <>
      <Container>
      <H1> Player is moving now {isFirst ? "X" : "O"} </H1>
      <WrapperField>
         <WrapperSq>
         <Square hand={()=>_onClick(0)}  value={arrField[0]}/>
         <Square  hand={()=>_onClick(1)} value={arrField[1]}/>
         <Square hand={()=>_onClick(2)} value={arrField[2]} />
         </WrapperSq>

         <WrapperSq>
         <Square hand={()=>_onClick(3)} value={arrField[3]}/>
         <Square hand={()=>_onClick(4)} value={arrField[4]}/>
         <Square hand={()=>_onClick(5)} value={arrField[5]}/>
         </WrapperSq>

         <WrapperSq>
         <Square hand={()=>_onClick(6)} value={arrField[6]} />
         <Square hand={()=>_onClick(7)} value={arrField[7]} />
         <Square hand={()=>_onClick(8)} value={arrField[8]} />
         </WrapperSq>
      </WrapperField>
      <ModalWindow isOpenModal ={finishGame.finish}>
      <H3Modal>{finishGame.whoIsWinner} </H3Modal>
   <StartAgain onClick={TryAgain}>
      <TextInsideButton>Do you wanna try again?</TextInsideButton>
   </StartAgain>
      </ModalWindow>
      </Container>
      
      </>
   )
}

export default Field