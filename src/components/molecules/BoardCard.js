import styled from "styled-components";
import React, { Component, useState } from "react";
import axios from 'axios';

const BoardCard = ({ 
    data 
}
) => {

    const SetComma = (num) => {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }

    const PlayGame = () => {
        window.location.href=(data.id);
    }

    return (
    <Container>

        <MainImage>
            <img src="/data/image/test/wak.jpg" width="160" height="190"></img>
        </MainImage>
        <TitleText>{data.title}</TitleText>
        <SubtitleText>{data.subtitle}</SubtitleText>
        <LikeBox>
            <img src="/data/image/icon/Heart1.png" width="23" height="23"></img>
            <LikeText>{SetComma(data.like)}</LikeText>
        </LikeBox>
        <PlayBox>
            <PlayButton onClick={PlayGame} src="/data/image/icon/play.png"></PlayButton>
        </PlayBox>
    </Container>
    )
}

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
`;

const LikeText = styled.div`
    color:red;
    font-family: 'Nanum Gothic', sans-serif;
    margin-left:10px;
`;

const PlayBox = styled.div`
    width:260px;
    display:flex;
    justify-content:right;
    position:relative;
    bottom:35px;
`;  

const PlayButton = styled.img`
    width:35px;
    height:35px;
    margin-left:210px;
`;

export default BoardCard;