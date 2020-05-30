import styled, { css } from "styled-components";
import React, { Component, useState } from "react";
import Bingobox from "../atoms/Bingobox"
import ReactDOM from "react-dom"

const Playbingo = (
    data
) => {
    const bb = document.getElementsByClassName("bingoBox");

    const CreateCircle = (word, num) => {
        ReactDOM.render((<>{word}<Redcircle src="/data/image/icon/redcircle.png" /></>), bb[num]);
    }

    return (
        <Exbox backcolor={data.data.backcolor}>
            <Title titlecolor={data.data.titlecolor}>{data.data.title}</Title>
            <Subtitle subtitlecolor={data.data.subtitlecolor}>{data.data.subtitle}</Subtitle>
            <Bingoboxsection>
                {function () {
                    let rows = [];
                    for (let i = 0; i < 25; i++) {
                        rows.push(
                            <Bingobox className="bingoBox" onClick={(() => { CreateCircle(data.data.bingoarray[i], i) })}>
                                {data.data.bingoarray[i]}
                            </Bingobox>)
                    }
                    return rows;
                }()}
            </Bingoboxsection>
        </Exbox>
    )
}

const Exbox = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    background-color:#000000;
    ${({ backcolor }) => backcolor && css`
        background-color:${backcolor};
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
    ${({ titlecolor }) => titlecolor && css`
        color:${titlecolor};
  ` }
`

const Subtitle = styled.div`
    margin-top:10px;
    font-size:30px;
    font-family: 'Nanum Pen Script', cursive;
    color:#ffffff;
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
`;

const Redcircle = styled.img`
    width:80px;
    height:80px;
    position:absolute;
    margin-left:-14px;
    margin-top:3px;
`;

export default Playbingo;