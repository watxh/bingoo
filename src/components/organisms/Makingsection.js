import styled from "styled-components";
import React, { Component, useState } from "react";

import Example from "../molecules/Example"
import Exmake from "../molecules/Exmake"

const Makingsection = () =>{

    const [backcolor, setBackcolor] = useState("#000000");

    const changecolor = (color) =>{
        setBackcolor(color);
    }

    return(
        <>
        <Example backcolor={backcolor}/>
        <Centerline></Centerline>
        <Exmake changebackcolor={changecolor}/>
        </>
    );
}

const Centerline = styled.div`
    position:fixed;
    width:2.5px;
    height:100%;
    background-color:#B5B5B5;
    left:50%;
`;

export default Makingsection;