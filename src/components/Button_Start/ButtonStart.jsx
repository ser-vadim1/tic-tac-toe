import React, { useState } from "react";
import {Button, WrapperButton, P} from "./styledButtonStart"
import {GlobalStyle} from "../../styles/GlobalStyle"
import {Link} from "react-router-dom"

const ButtonStart = () =>{

   return (
      <>
      <GlobalStyle/>
      <WrapperButton>
         <Link to="/Game">
            <Button><P>S T A R T</P></Button>
         </Link>
      </WrapperButton>
      </>
   )
}

export default ButtonStart