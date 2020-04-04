import styled, {css} from "styled-components";
import React, { Component, useState } from "react";

import { ChromePicker } from 'react-color'

const Exmake = ({
    changebackcolor
}) => {

    const [isclick, setIsclick] = useState(0);
    const [color, setColor] = useState("#000000");

    const Changecolor = (color) =>{
        setColor(color);
    }

    const Buttonclick = () =>{
        if(isclick===1){setIsclick(0)}else{setIsclick(1)}
    }

    const Buttonclose = () =>{
        setIsclick(0);
    }

    const changecolorh=(color)=>{
        changebackcolor(color);
    }

    return (
        <All>
            <Infosection>
                <Insection>
                    <Sectionname>
                        빙고 기본 정보
                    </Sectionname>
                </Insection>

                <Title>
                    <Titlename>제목</Titlename>
                    <Titleinput placeholder="제목을 입력하세요"/>
                    <Titlename>제목색</Titlename>
                    <Rgbbutton backcolor={color} onClick={Buttonclick}/>
                    {isclick ?<><Cover onClick={Buttonclose}></Cover><ChromePicker color={color} onChange={Changecolor} onChangeComplete={changecolorh}/></>:<></>}
                </Title>
            </Infosection>
        </All>
    );
}

const All = styled.div`
    position:relative;
    left:50%;
    width:50%;
`;

const Cover = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`

const Rgbbutton = styled.div`
    margin-left:10px;
    width:30px;
    height:30px;
    ${({backcolor}) => backcolor && css`
        background-color:${backcolor.hex};
  ` }
    border:2px solid black;
`;  

const Infosection = styled.div`
    width:100%;
    height:300px;
    display:flex;
    flex-direction:column;
`;

const Sectionname = styled.div`
    color:#595959;
    margin-left:20px;
    font-size:18px;
    font-weight:600;
`;

const Insection = styled.div`
    position:relative;
    top:0px;
    width:100%;
    height:60px;
    border-bottom:2px solid #B5B5B5;
    text-align:left;
    line-height:60px;
`

const Title = styled.div`
    margin-top:30px;
    margin-left:30px;
    display:flex;
    flex-direction:row;
    line-height:30px;
`;

const Titleinput = styled.input`
    margin-left:20px;
    margin-right:30px;
    height:30px;
    width:300px;
    border:1.4px solid #B5B5B5;
    padding-left:10px;
`

const Titlename = styled.div`
    font-size:20px;
    color:#595959;
`

export default Exmake;