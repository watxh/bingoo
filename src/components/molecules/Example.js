import styled, {css} from "styled-components";
import React, { Component, useState } from "react";
import Bingobox from "../atoms/Bingobox"
import download from "downloadjs"
import * as htmlToImage from 'html-to-image';

const Example = ({
    title={title},
    subtitle={subtitle},
    backcolor={backcolor},
    titlecolor={titlecolor},
    subtitlecolor={subtitlecolor},
    bingoarray={bingoarray}
}) =>{

    return(
        <All>
            <Exbox backcolor={backcolor}>
                <Title titlecolor={titlecolor}>{title}</Title>
                <Subtitle subtitlecolor={subtitlecolor}>{subtitle}</Subtitle>
                <Bingoboxsection>
                    {bingoarray.map(({value})=>(
                        <Bingobox>{value}</Bingobox>
                    ))}
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
    background-color:#000000;
    ${({backcolor}) => backcolor && css`
        background-color:${backcolor.hex};
  ` }
    width:375px;
    height:640px;
    margin-left:-187px;
    margin-top:-285px;
    text-align:center;
    align-items:center;
    border-radius:10px;
`;

const Title = styled.div`
    margin-top:40px;
    font-size:40px;
    font-family: 'Jua', sans-serif;
    color:#ffffff;
    ${({titlecolor}) => titlecolor && css`
        color:${titlecolor.hex};
  ` }
`

const Subtitle = styled.div`
    margin-top:10px;
    font-size:30px;
    font-family: 'Nanum Pen Script', cursive;
    color:#ffffff;
    ${({subtitlecolor}) => subtitlecolor && css`
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
`;

export default Example;