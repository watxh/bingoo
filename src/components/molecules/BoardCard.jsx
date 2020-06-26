import styled, { keyframes, css } from "styled-components";
import React, { Component, useState } from "react";
import axios from 'axios';

const BoardCard = ({ 
    data
}
) => {

    const [press, setPress] = useState(0);

    const SetComma = (num) => {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }

    const PlayGame = () => {
        window.location.href=(data.id);
    }

    const ChangeLike = () => {
        if(press===0){
            setPress(1);
            SetLike(1);
        }
        else{
            setPress(0);
            SetLike(0);
        }
    }

    const SetLike = async(e) => {
        const params = new URLSearchParams({
            like:data.like+e,
        })
        const a = await axios.patch(`https://bingoback.herokuapp.com/users/a/${data._id}`, params);
    }

    return (
    <Container>
        <MainImage onClick={PlayGame}>
            <TitleImage src={data.imageURL} width="260" height="310"></TitleImage>
        </MainImage>
        <UnderBox>
            <TitleText>{data.title}</TitleText>
            <LikeBox>
            {press===0
                ? <LikeImage src="/data/image/icon/Heart1.png" width="20" height="20" onClick={ChangeLike} press={press}></LikeImage>
                : <LikeImage src="/data/image/icon/Heart2.png" width="20" height="20" onClick={ChangeLike} press={press}></LikeImage>
            }
            <LikeText>
                {press===1
                ?SetComma(data.like+1)
                :SetComma(data.like)
                }
            </LikeText>
            </LikeBox>
            <PlayBox>
                <PlayButton onClick={PlayGame} src="/data/image/icon/play.png"></PlayButton>
            </PlayBox>
        </UnderBox>
    </Container>
    )
}

const HeartBig = keyframes`
  0% {
    transform:scale(1.0);
  }
  50% {
    transform:scale(1.13);
  }
  100% {
    transform:scale(1.0);
  }
`

const Container = styled.div`
    width:240px;
    height:290px;
    margin-left:30px;
    margin-right:30px;
    margin-bottom:50px;
    border-radius:10px;
    box-shadow:0px 2px 4px 0px #dddddd;

    transition: all 0.3s;

    :hover{
        box-shadow:0px 6px 9px 0px #dddddd;
        transform:scale(1.01);
    }
`;

const MainImage = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`;

const TitleImage = styled.img`
    border-radius:10px;
    width:240px;
    height:290px;
    position:absolute;
`

const UnderBox = styled.div`
    position:absolute;
    width:240px;
    height:65px;
    background-color:rgba(255,255,255);
    border-radius:0px 0px 10px 10px;
    margin-top:225px;
    
`  

const TitleText = styled.div`
    @font-face {
        font-family: SC;
        src: url('/data/font/SCDream6.otf');
    }
    font-family:"SC";
    font-size:18px;
    margin-left:12px;
    margin-top:8px;
`;

const SubtitleText = styled.div`
    @font-face {
        font-family: DoHyeon;
        src: url('/data/font/DoHyeon-Regular.ttf');
    }
    font-family:"DoHyeon";
    font-size:16px;
    margin-left:30px;
    color:gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height:20px;
    width:180px;
`;

const LikeBox = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:12px;
    line-height:19px;
    z-index:1;
    margin-top:2px;
`;

const LikeText = styled.div`
    color:red;
    font-family: 'Nanum Gothic', sans-serif;
    margin-left:10px;
`;

const LikeImage = styled.img`
    ${({press}) =>  press && css`
        animation: ${HeartBig} 0.15s both;
  ` }
`

const PlayBox = styled.div`
    display:flex;
    justify-content:right;
    position:relative;
    bottom: 40px;
    margin-left:195px;
`;  

const PlayButton = styled.img`
    width:35px;
    height:35px;
    z-index:10;
`;

export default BoardCard;