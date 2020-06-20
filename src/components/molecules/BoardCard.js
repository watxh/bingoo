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
        const a = await axios.patch(`http://localhost:3001/users/a/${data._id}`, params);
    }

    return (
    <Container>

        <MainImage>
            <img src={data.imageURL} width="160" height="190"></img>
        </MainImage>
        <TitleText>{data.title}</TitleText>
        <SubtitleText>{data.subtitle}</SubtitleText>
        <LikeBox>
            {press===0
                ? <LikeImage src="/data/image/icon/Heart1.png" width="23" height="23" onClick={ChangeLike} press={press}></LikeImage>
                : <LikeImage src="/data/image/icon/Heart2.png" width="23" height="23" onClick={ChangeLike} press={press}></LikeImage>
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
    width:260px;
    height:310px;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:50px;
    border-radius:10px;
    box-shadow:5px 5px 7px #C6C6C6;
`;

const MainImage = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:15px;
`;

const TitleText = styled.div`
    @font-face {
        font-family: DoHyeon;
        src: url('/data/font/DoHyeon-Regular.ttf');
    }
    font-family:"DoHyeon";
    font-size:22px;
    margin-left:30px;
    margin-top:16px;
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
    margin-top:8px;
    display:flex;
    flex-direction:row;
    margin-left:10px;
    line-height:19px;
    z-index:1;
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
    bottom:35px;
    margin-left:210px;
`;  

const PlayButton = styled.img`
    width:35px;
    height:35px;
    z-index:10;
`;

export default BoardCard;