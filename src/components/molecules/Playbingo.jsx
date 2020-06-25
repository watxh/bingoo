import styled, { css } from "styled-components";
import React, { Component, useState, useEffect } from "react";
import Bingobox from "../atoms/Bingobox"
import ReactDOM from "react-dom"

const Playbingo = (
    data
) => {
    const bb = document.getElementsByClassName("bingoBox");

    const [circled, setCircled] = useState([]);
    const [bingoLine, setBingoLine] = useState([]);

    const [isBackImage, setIsBackImage] = useState(0);

    const CreateCircle = (word, num) => {
        ReactDOM.render((<>{word}<Redcircle src="/data/image/icon/redcircle.png" /></>), bb[num]);
        if (circled[num] == undefined || circled[num].now == 0) {
            ReactDOM.render((<>{word}<Redcircle src="/data/image/icon/redcircle.png" /></>), bb[num]);
            setCircled(() => {
                let newarray = [...circled];
                newarray[num] = { now: "1" }
                return newarray;
            })
        }
        else {
            ReactDOM.render((<>{word}</>), bb[num]);
            setCircled(() => {
                let newarray = [...circled];
                newarray[num] = { now: "0" }
                return newarray;
            })
        }

        CheckBingoX();
    }

    const CheckBingoX = () => {

        let num = 0;

        for (let i = 0; i < 5; i++) //가로줄 빙고 체크
        {
            for (let j = 0; j < 5; j++) {
                if (circled[i * 5 + j] && circled[i * 5 + j].now === "1") {
                    num++;
                }
            }
            if (num === 5) {
                if (!bingoLine[i]) {
                    setBingoLine(() => {
                        let newarray = [...bingoLine];
                        newarray[i] = { now: "1" }
                        return newarray;
                    })
                }
            }
            num = 0;
        }

        let num2 = 0;

        for (let i = 0; i < 5; i++) //세로줄 빙고 체크
        {
            for (let j = 0; j < 5; j++) {
                if (circled[i + j * 5] && circled[i + j * 5].now === "1") {
                    num2++;
                }
            }
            if (num2 === 5) {
                if (!bingoLine[i + 5]) {
                    setBingoLine(() => {
                        let newarray = [...bingoLine];
                        newarray[i + 5] = { now: "1" }
                        return newarray;
                    })
                }
            }
            num2 = 0;
        }

        let num3 = 0;

        for (let i = 0; i < 25; i += 6) { //대각선 왼쪽 위에서 오른쪽 아래
            if (circled[i] && circled[i].now === "1") {
                num3++;
            }
        }
        if (num3 === 5) {
            if (!bingoLine[10]) {
                setBingoLine(() => {
                    let newarray = [...bingoLine];
                    newarray[10] = { now: "1" }
                    return newarray;
                })
            }
        }

        let num4 = 0;

        for (let i = 4; i < 25; i += 4) { //대각선 오른쪽 위에서 왼쪽 아래
            if (circled[i] && circled[i].now === "1") {
                num4++;
            }
        }
        if (num4 === 5) {
            if (!bingoLine[11]) {
                setBingoLine(() => {
                    let newarray = [...bingoLine];
                    newarray[11] = { now: "1" }
                    return newarray;
                })
            }
        }
    }

    const FinishBingo = () => {
        for(let i = 0; i < 25; i++) {
            if(bingoLine[i] && bingoLine[i].now == 1){
                console.log(i);
            }
        }
    }

    useEffect(() => {
        if(data.data.backcolor==="null" || data.data.backcolor===undefined){
            setIsBackImage(1);
        }else{
            setIsBackImage(0);
        }
    }, []);

    return (
        <>
            {isBackImage===1 ? <BackImage src={data.data.backimageURL}/> :<></>}
            <Exbox backcolor={data.data.backcolor} backImage={isBackImage}>
                <Title titlecolor={data.data.titlecolor}>{data.data.title}</Title>
                <Subtitle subtitlecolor={data.data.subtitlecolor}>{data.data.subtitle}</Subtitle>
                <Bingoboxsection>
                    {function () {
                        let rows = [];
                        for (let i = 0; i < 25; i++) {
                            rows.push(
                                <Bingobox className="bingoBox" onClick={(() => { CreateCircle(data.data.bingoarray[i], i) })} backImage={isBackImage}>
                                    {data.data.bingoarray[i]}
                                </Bingobox>)
                        }
                        return rows;
                    }()}
                </Bingoboxsection>

            </Exbox>
        </>
    )
}

const Container = styled.div`
    width:100%;
`

const BackImage = styled.img`
    position:absolute;
    left:50%;
    top:50%;
    width:375px;
    height:640px;
    margin-left:-187px;
    margin-top:-285px;
    border-radius:10px;
    z-index:-1;
`;

const Exbox = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    background-color:rgba(0,0,0,1);
    width:375px;
    height:640px;
    margin-left:-187px;
    margin-top:-285px;
    text-align:center;
    align-items:center;
    border-radius:10px;
    z-index:0;
    ${({ backcolor }) => backcolor && css`
        background-color:${backcolor};
    ` }
    ${({ backImage }) => backImage && css`
        background-color:rgba(0,0,0,0);
    ` }
`;

const Title = styled.div`
    margin-top:40px;
    font-size:40px;
    font-family: 'Jua', sans-serif;
    color:#ffffff;
    ${({ titlecolor }) => titlecolor && css`
        color:${titlecolor};
  ` }
    z-index:1;
`

const Subtitle = styled.div`
    margin-top:10px;
    font-size:30px;
    font-family: 'Nanum Pen Script', cursive;
    color:#ffffff;
    ${({ subtitlecolor }) => subtitlecolor && css`
        color:${subtitlecolor.hex};
  ` }
    z-index:1;
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

const Redcircle = styled.img`
    width:80px;
    height:80px;
    position:absolute;
    margin-left:-14px;
    margin-top:3px;
`;

const Completebutton = styled.div`
    width:140px;
    height:40px;
    background-color:#0037B6;
    border-radius:10px;
    font-size:25px;
    color:white;
    font-family: 'Do Hyeon', sans-serif;
    text-align:center;
    line-height:40px;
    margin-left:83%;
    margin-top:40%;
`;

export default Playbingo;