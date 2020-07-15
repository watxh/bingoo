import styled, { keyframes, css } from "styled-components";
import React, { Component, useState } from "react";

const SkeletonCard = () => {
  return (
    <Container>
      <MainImage>
        <TitleImage />
      </MainImage>
      <UnderBox>
        <TitleText />
        <LikeBox />
        <PlayBox />
      </UnderBox>
    </Container>
  );
};

const Container = styled.div`
  width: 240px;
  height: 290px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #dddddd;
`;

const MainImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TitleImage = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 240px;
  height: 290px;
  position: absolute;
`;

const UnderBox = styled.div`
  position: absolute;
  width: 240px;
  height: 65px;
  background-color: rgba(255, 255, 255);
  border-radius: 0px 0px 10px 10px;
  margin-top: 225px;
`;

const TitleText = styled.div`
  width: 110px;
  height: 18px;
  border-radius: 15px;
  margin-left: 12px;
  margin-top: 10px;
  background-color: #f5f5f5;
`;

const LikeBox = styled.div`
  margin-left: 12px;
  line-height: 19px;
  margin-top: 8px;
  width: 80px;
  height: 16px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const PlayBox = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  bottom: 40px;
  margin-left: 185px;
  width: 40px;
  height: 40px;
  border-radius: 70%;
  background-color: #f5f5f5;
`;

export default SkeletonCard;
