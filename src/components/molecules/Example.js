import styled, { css } from "styled-components";
import React, { Component, useState, useEffect } from "react";
import Bingobox from "../atoms/Bingobox"
import download from "downloadjs"
import * as htmlToImage from 'html-to-image';

const Example = ({
    title,
    subtitle,
    backcolor,
    titlecolor,
    subtitlecolor,
    bingoarray,
    changerownum,
    changecolnum,
    backImage,
    rownum,
    columnnum,
}) => {

    const [backImageURL, setBackImageURL] = useState("");

    useEffect(() => {
        let reader = new FileReader();
        if (backImage) {
            reader.onloadend = () => {
                setBackImageURL(reader.result);
            }
            reader.readAsDataURL(backImage);
        }
    }, [backImage])

    return (

        <All>
            {backImageURL && <BackImage src={backImageURL}></BackImage>}
            <Exbox backcolor={backcolor} backImage={backImage}>
                <Title titlecolor={titlecolor}>{title}</Title>
                <Subtitle subtitlecolor={subtitlecolor}>{subtitle}</Subtitle>
                <Bingoboxsection>
                    {function () {
                        let rows = [];
                        for (let i = 0; i < 25; i++) {
                            rows.push(
                                <Bingobox
                                    onClick={function () { changerownum(i % 5 + 1); changecolnum(parseInt(i / 5) + 1) }}
                                    backImage={backImage}
                                    clicked={rownum-1+(columnnum-1)*5 === i
                                        ?1
                                        :0
                                    }>
                                    {bingoarray[i].word}
                                </Bingobox>);
                        }
                        return rows;
                    }()}
                </Bingoboxsection>
            </Exbox>
        </All>

    );
}

const All = styled.div`
    width:50%;
    height:100%;
`;

const Exbox = styled.div`
    position:absolute;
    left:25%;
    top:50%;
    background-color:rgba(0,0,0,1);
    ${({ backcolor }) => backcolor && css`
        background-color:${backcolor.hex};
  ` }
    ${({ backImage }) => backImage && css`
        background-color:rgba(0,0,0,0);
  ` }
    width:375px;
    height:640px;
    margin-left:-187px;
    margin-top:-285px;
    text-align:center;
    align-items:center;
    border-radius:10px;
    z-index:0;
`;

const BackImage = styled.img`
    position:absolute;
    left:25%;
    top:50%;
    width:375px;
    height:640px;
    margin-left:-187px;
    margin-top:-285px;
    border-radius:10px;
    z-index:-1;
`;

const Title = styled.div`
    margin-top:40px;
    font-size:40px;
    font-family: 'Jua', sans-serif;
    color:#ffffff;
    z-index:1;
    ${({ titlecolor }) => titlecolor && css`
        color:${titlecolor.hex};
  ` }
`

const Subtitle = styled.div`
    margin-top:10px;
    font-size:30px;
    font-family: 'Nanum Pen Script', cursive;
    color:#ffffff;
    z-index:1;
    ${({ subtitlecolor }) => subtitlecolor && css`
        color:${subtitlecolor.hex};
  ` }
`

const Bingoboxsection = styled.div`
    position:relative;
    margin-left:auto;
    margin-right:auto;
    top:30px;
    width:355px;
    height:355px;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    z-index:1;
`;

export default Example;