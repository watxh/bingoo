import styled from "styled-components";
import React, { Component, useState } from "react";

import Example from "../molecules/Example"
import Exmake from "../molecules/Exmake"

const Makingsection = () =>{

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const [backcolor, setBackcolor] = useState("#000000");
    const [titlecolor, setTitlecolor] = useState("#ffffff");
    const [subtitlecolor, setSubtitlecolor] = useState("#ffffff");

    const [bingoarray, setBingoarray] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    const changetitle = (name) =>{
        setTitle(name);
    }

    const changesubtitle = (name) =>{
        setSubtitle(name);  
    }

    const changebackcolor = (color) =>{
        setBackcolor(color);
    }

    const changetitlecolor = (color) =>{
        setTitlecolor(color);
    }

    const changesubtitlecolor = (color) =>{
        setSubtitlecolor(color);
    }

    const changebingoarray = (con, num) =>{
        setBingoarray(() =>{
            let newarray = [...bingoarray];
            newarray[num] = {value:con};
            return newarray;
        });
    }

    return(
        <>
        <Example title={title} subtitle={subtitle} backcolor={backcolor} titlecolor={titlecolor} subtitlecolor={subtitlecolor} bingoarray={bingoarray}/>
        <Centerline></Centerline>
        <Exmake 
        changetitle={changetitle}
        changesubtitle={changesubtitle} 
        changebackcolor={changebackcolor} 
        changetitlecolor={changetitlecolor} 
        changesubtitlecolor={changesubtitlecolor} 
        changebingoarray={changebingoarray}
        bingoarray={bingoarray}/>
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