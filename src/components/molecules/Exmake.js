import styled, {css} from "styled-components";
import React, { Component, useState } from "react";

import { ChromePicker } from 'react-color'

const Exmake = ({
    changetitle,
    changesubtitle,
    changebackcolor,
    changetitlecolor,
    changesubtitlecolor
}) => {

    const [titlecolorclick, setTitlecolorclick] = useState(0);
    const [titlecolor, setTitlecolor] = useState("#ffffff");
    const [title, setTitle] = useState("");

    const [subtitlecolorclick, setSubtitlecolorclick] = useState(0);
    const [subtitlecolor, setSubtitlecolor] = useState("#ffffff");
    const [subtitle, setSubtitle] = useState("");

    const [backcolorclick, setBackcolorclick] = useState(0);
    const [backcolor, setBackcolor] = useState("#ffffff");

    const Buttonclose = () =>{
        setTitlecolorclick(0);
        setSubtitlecolorclick(0);
        setBackcolorclick(0);
    }

    const Backcolorclick = () =>{
        if(backcolorclick===1){setBackcolorclick(0)}else{setBackcolorclick(1)}
    }

    const changebackcolorh=(color)=>{
        changebackcolor(color);
        setBackcolor(color);
    }

    const Titlecolorclick = () =>{
        if(titlecolorclick===1){setTitlecolorclick(0)}else{setTitlecolorclick(1)}
    }

    const changetitlecolorh = (color) =>{
        changetitlecolor(color);
        setTitlecolor(color);
    }

    const Changetitle = (e) => {
        setTitle(e.target.value);
        changetitle(e.target.value);
    }

    const Subtitlecolorclick = () =>{
        if(subtitlecolorclick===1){setSubtitlecolorclick(0)}else{setSubtitlecolorclick(1)}
    }

    const changesubtitlecolorh = (color) =>{
        changesubtitlecolor(color);
        setSubtitlecolor(color);
    }

    const Changesubtitle = (e) => {
        setSubtitle(e.target.value);
        changesubtitle(e.target.value);
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
                    <Titleinput placeholder="제목을 입력하세요" type="text" value={title} onChange={Changetitle}/>
                    <Titlename>제목색</Titlename>
                    <Rgbbutton backcolor={titlecolor} onClick={Titlecolorclick}/>
                    {titlecolorclick ?<Popover><Cover onClick={Buttonclose}></Cover><ChromePicker color={titlecolor} onChange={changetitlecolorh}/></Popover>:<></>}
                </Title>

                <Subtitle>
                    <Subtitlename>부제목</Subtitlename>
                    <Subtitleinput placeholder="부제목을 입력하세요" type="text" value={subtitle} onChange={Changesubtitle}/>
                    <Subtitlename>부제목색</Subtitlename>
                    <Rgbbutton backcolor={subtitlecolor} onClick={Subtitlecolorclick}/>
                    {subtitlecolorclick ?<Popover><Cover onClick={Buttonclose}></Cover><ChromePicker color={subtitlecolor} onChange={changesubtitlecolorh}/></Popover>:<></>}
                </Subtitle>

                <Backcolor>
                    <Backcolorname>배경색</Backcolorname>
                    <Rgbbutton backcolor={backcolor} onClick={Backcolorclick}/>
                    {backcolorclick ?<PopoverB><Cover onClick={Buttonclose}></Cover><ChromePicker color={backcolor} onChange={changebackcolorh}/></PopoverB>:<></>}
                </Backcolor>
            </Infosection>

            <Infosection>
                <InsectionB>
                    <Sectionname>
                        빙고 내용 추가
                    </Sectionname>
                </InsectionB>
                
            </Infosection>
        </All>
    );
}

const Popover = styled.div`
    position:absolute;
    left:540px;
    z-index:2;
`

const PopoverB = styled.div`
    position:absolute;
    left:240px;
    z-index:2;
`

const All = styled.div`
    position:relative;
    left:50%;
    width:50%;
    display:flex;
    flex-direction:column;
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
    border:2px solid black;
    ${({backcolor}) => backcolor && css`
        background-color:${backcolor.hex};
  ` }
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

const InsectionB = styled.div`
    position:relative;
    top:0px;
    width:100%;
    height:60px;
    border-bottom:2px solid #B5B5B5;
    border-top:2px solid #B5B5B5;
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

const Subtitle = styled.div`
    margin-top:30px;
    margin-left:11px;
    display:flex;
    flex-direction:row;
    line-height:30px;
`;

const Subtitlename = styled.div`
    font-size:20px;
    color:#595959;
`

const Subtitleinput = styled.input`
    margin-left:20px;
    margin-right:10px;
    height:30px;
    width:300px;
    border:1.4px solid #B5B5B5;
    padding-left:10px;
`

const Backcolor = styled.div`
    margin-top:30px;
    margin-left:11px;
    display:flex;
    flex-direction:row;
    line-height:30px;
`;

const Backcolorname = styled.div`
    font-size:20px;
    color:#595959;
`

export default Exmake;