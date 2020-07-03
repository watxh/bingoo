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
        if (e) {
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

    const changeImage = (e) => {
        setImage(e.target.files[0]);
    }

    const handleClick = event => {
        var button = document.getElementById('hiddenbutton')
        button.click();
    };

    const Changetitle = (e) => {
        setTitle(e.target.value);
        changetitle(e.target.value);
    }

    const Changesubtitle = (e) => {
        setSubtitle(e.target.value);
        changesubtitle(e.target.value);
    }

    useEffect(() => {
        if(image!==null){
            document.getElementById("upload-name").value = image.name;
        }
    }, [image])

    useEffect(()=>{
        if(backImage!==null && backImage!== undefined){
            document.getElementById("upload-backname").value = backImage.name;
        }
    }, [backImage])

    return (
        <All>
            <InfoBox>
                <InfoTitle>
                    빙고 기본 정보
                </InfoTitle>    
                <InfoText>
                    제목
                </InfoText>
                <InfoInput placeholder="제목을 입력하세요" type="text" value={title} onChange={Changetitle}/>
                <InfoColorBox>
                    <InfoColorPick backcolor={titlecolor} onClick={Titlecolorclick} />
                    {titlecolorclick ? <Popover><Cover onClick={Buttonclose}></Cover><ChromePicker color={titlecolor} onChange={changetitlecolorh} /></Popover> : <></>}
                    <InfoColor>제목 색상</InfoColor>
                </InfoColorBox>

                <InfoText>
                    부제목
                </InfoText>
                <InfoInput placeholder="부제목을 입력하세요" type="text" value={subtitle} onChange={Changesubtitle}/>
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
                    {backcolorclick ? <Popover><Cover onClick={() => { Buttonclose(1) }}></Cover><ChromePicker color={backcolor} onChange={changebackcolorh} /></Popover> : <></>}
                </TitleImageBox>

                <InfoText>
                    대표 사진
                </InfoText>
                <TitleImageInput id="upload-name" placeholder="파일선택" disabled="disabled" />
                <TitleImageBox>
                    <TitleImageButton onClick={handleClick}>업로드</TitleImageButton>
                    <input type="file" style={{ display: 'none' }} id="hiddenbutton" class="upload-hidden" onChange={changeImage} />
                </TitleImageBox>
            </InfoBox>
            <PlusBox>
                <InfoTitle>
                    빙고 기본 정보
                </InfoTitle>
                <PosBox>
                <InfoText>
                    내용
                </InfoText>
                <PosText>
                    {rownum} X {columnnum}
                </PosText>
                </PosBox>
                <InfoInput placeholder="내용을 입력하세요" />
            </PlusBox>
            <Savesection>
                <Savebutton onClick={() => { changesuccess(image, backImage) }}>저장하기</Savebutton>
            </Savesection>
        </All>
    )
}

const All = styled.div`
    position:relative;
    left:73%;
    display:flex;
    flex-direction:column;
    width:27%;
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
    font-size:20px;
    font-weight:900;
    color:#363636;
    margin-bottom:12px;
`

const InfoText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size:14px;
    font-weight:700;
    color:#595959;
    margin-top:13px;
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
    margin-top:15px;
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
    font-size:12px;
    margin-right:10px;
`

const InfoColorPick = styled.div`
    width:25px;
    height:25px;
    border-radius:70%;
    box-shadow:0px 2px 6px #D3D3D3;
    margin-top:10px;
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
    height:38px;
    width:120px;
    background-color:#FF1B1B;
    color:white;
    font-family: 'Handon3gyeopsal600g';
    font-size:15px;
    box-shadow:0px 4px 6px #D3D3D3;
    margin-right:20px;
`
const TitleImageInput = styled.input`
    background-color:transparent;
    border-style:none;
    border-radius:10px;
    margin-right:10px;
    height:20px;
    margin-bottom:10px;
`

const PlusBox = styled.div`
    height:30%;
    padding-left:40px;
    padding-top:40px;
    display:flex;
    flex-direction:column;
`

const PosBox = styled.div`
    display:flex;
    flex-direction:row;
`

const PosText = styled.div`
    font-size:20px;
    margin-top:8px;
    margin-left:10px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:500;
    color:#595959;
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

const Savesection = styled.div`
    position:relative;
`;

const Savebutton = styled.button`
    width:100%;
    height:75px;
    margin-top:70px;
    background-color:#FF1B1B;
    color:white;
    border:0px;
    font-size:30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:700;
    text-align:center;
    box-shadow:0px 3px 6px #D4D4D4;
`;

const Saveimage = styled.img`
    width:18px;
    height:auto;
    position:relative;
    left:35px;
    top:5px;
`;

export default Exmake2;