import React, { useCallback, useEffect, useState } from "react";
import {Sq, WrapperSq, P} from "./styledSquare"
import {useRenderCount} from "../hooks/RenderCount"



const Square = React.memo( ({hand, value} ) => {

   return(
      <>
      <Sq onClick={hand}><P>{value}</P> </Sq>
      </>
   )
})


export default Square