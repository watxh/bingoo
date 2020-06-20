import styled, {css} from "styled-components";
import React, { Component, useState } from "react";

const Bingobox = styled.div`
    width:53px;
    height:53px;
    margin:3px;
    background-color:white;
    ${({ backImage }) => backImage && css`
        background-color:rgba(255,255,255,0.8);
  ` }
    border-radius:4px;
    font-size:11px;
    font-family: 'Noto Sans KR', sans-serif;
    display:flex;
    align-items:center;
    overflow:hidden;
    padding:6px;
`;

export default Bingobox;