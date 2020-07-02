import styled, { css } from "styled-components";
import React, { Component, useState, useEffect } from "react";

import { ChromePicker } from 'react-color'
import download from "downloadjs"
import * as htmlToImage from 'html-to-image';

const Exmake2 = ({
    changetitle,
    changesubtitle,
    changebackcolor,
    changetitlecolor,
    changesubtitlecolor,
    changebingoarray,
    changebackimage,
    bingoarray,
    changesuccess,
    rownum,
    columnnum
}) => {

    const [titlecolorclick, setTitlecolorclick] = useState(0);
    const [titlecolor, setTitlecolor] = useState("#ffffff");
    const [title, setTitle] = useState("");

    const [subtitlecolorclick, setSubtitlecolorclick] = useState(0);
    const [subtitlecolor, setSubtitlecolor] = useState("#ffffff");
    const [subtitle, setSubtitle] = useState("");

    const [contents, setContents] = useState("");

    const [backcolorclick, setBackcolorclick] = useState(0);
    const [backcolor, setBackcolor] = useState("#ffffff");

    const [image, setImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const Titlecolorclick = () => {
        if (titlecolorclick === 1) { setTitlecolorclick(0) } else { setTitlecolorclick(1) }
    }

    const changetitlecolorh = (color) => {
        changetitlecolor(color);
        setTitlecolor(color);
    }

    const Buttonclose = (e) => {
        setTitlecolorclick(0);
        setSubtitlecolorclick(0);
        setBackcolorclick(0);
        if(e.target.value) {
            changebackimage(null);
        }
    }

    const Subtitlecolorclick = () => {
        if (subtitlecolorclick === 1) { setSubtitlecolorclick(0) } else { setSubtitlecolorclick(1) }
    }

    const changesubtitlecolorh = (color) => {
        changesubtitlecolor(color);
        setSubtitlecolor(color);
    }

    const Backcolorclick = () => {
        if (backcolorclick === 1) { setBackcolorclick(0) } else { setBackcolorclick(1) }
    }

    const changebackcolorh = (color) => {
        changebackcolor(color);
        setBackcolor(color);
    }

    const changeBackImage = (e) => {
        setBackImage(e.target.files[0]);
        changebackimage(e.target.files[0]);
        changebackcolor(null);
    }

    const backhandleClick = event => {
        var button = document.getElementById('hiddenbackbutton')
        button.click();
    };

    return (
        <All>
            <InfoBox>
                <InfoTitle>
                    빙고 기본 정보
                </InfoTitle>
                <InfoText>
                    제목
                </InfoText>
                <InfoInput placeholder="제목을 입력하세요" />
                <InfoColorBox>
                    <InfoColorPick backcolor={titlecolor} onClick={Titlecolorclick} />
                    {titlecolorclick ? <Popover><Cover onClick={Buttonclose}></Cover><ChromePicker color={titlecolor} onChange={changetitlecolorh} /></Popover> : <></>}
                    <InfoColor>제목 색상</InfoColor>
                </InfoColorBox>

                <InfoText>
                    부제목
                </InfoText>
                <InfoInput placeholder="부제목을 입력하세요" />
                <InfoColorBox>
                    <InfoColorPick backcolor={subtitlecolor} onClick={Subtitlecolorclick} />
                    {subtitlecolorclick ? <Popover><Cover onClick={Buttonclose}></Cover><ChromePicker color={subtitlecolor} onChange={changesubtitlecolorh} /></Popover> : <></>}
                    <InfoColor>부제목 색상</InfoColor>
                </InfoColorBox>

                <InfoText>
                    배경
                </InfoText>
                <TitleImageInput id="upload-backname" placeholder="파일선택" disabled="disabled" />
                <TitleImageBox>
                <TitleImageButton onClick={backhandleClick}>업로드</TitleImageButton>
                <input type="file" style={{ display: 'none' }} id="hiddenbackbutton" class="upload-backhidden" onChange={changeBackImage} />
                <InfoColorPick back="1" backcolor={backcolor} onClick={Backcolorclick} />
                {backcolorclick ? <Popover><Cover onClick={()=>{Buttonclose(1)}}></Cover><ChromePicker color={backcolor} onChange={changebackcolorh} /></Popover> : <></>}
                </TitleImageBox>
            </InfoBox>
            <PlusBox>
                asd
            </PlusBox>
        </All>
    )
}

const All = styled.div`
    position:relative;
    left:73%;
    display:flex;
    flex-direction:column;
    width:350px;
`;

const InfoBox = styled.div`
    margin-top:58px;
    height:60%;
    padding-left:40px;
    padding-top:40px;
    display:flex;
    flex-direction:column;
`

const InfoTitle = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size:23px;
    font-weight:900;
    color:#363636;
    margin-bottom:28px;
`

const InfoText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size:16px;
    font-weight:700;
    color:#595959;
    margin-top:13px;
    margin-bottom:15px;
`

const InfoInput = styled.input`
    font-family: 'Noto Sans KR', sans-serif;
    color:#595959;
    width:250px;
    height:36px;
    background-color:#F8F8F8;
    padding-left:20px;
    border-style:none;
    border-radius:120px;
    outline:none;
`

const InfoColorBox = styled.div`
    width:270px;
    display:flex;
    flex-direction:row-reverse;
`

const InfoColor = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:700;
    color:#595959;
    margin-top:13px;
    font-size:14px;
`

const InfoColorPick = styled.div`
    margin-left:20px;
    width:25px;
    height:25px;
    border-radius:70%;
    box-shadow:0px 2px 6px #D3D3D3;
    margin-top:11px;
    ${({ backcolor }) => backcolor && css`
        background-color:${backcolor.hex};
  ` }
    ${({ back }) => back && css`
        margin-top:0px;
        width:38px;
        height:38px;
  ` }
`;

const TitleImageBox = styled.div`
    display:flex;
    flex-direction:row;
`

const TitleImageButton = styled.button`
    border-style:none;
    outline:none;
    border-radius:20px;
    height:40px;
    width:120px;
    background-color:#FF1B1B;
    color:white;
    font-family: 'Handon3gyeopsal600g';
    font-size:15px;
    box-shadow:0px 4px 6px #D3D3D3;
`
const TitleImageInput = styled.input`
    background-color:transparent;
    border-style:none;
    border-radius:10px;
    margin-right:10px;
    height:20px;
`

const PlusBox = styled.div`
    margin-top:65px;
    height:30%;
    padding-left:40px;
    padding-top:40px;
`

const Cover = styled.div`    
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`

const Popover = styled.div`
    position:absolute;
    z-index:2;
`

export default Exmake2;