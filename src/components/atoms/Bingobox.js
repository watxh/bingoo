import styled, {css} from "styled-components";
import React, { Component, useState } from "react";

const Bingobox = styled.div`
    width:65px;
    height:65px;
    margin:3px;
    background-color:white;
    border-radius:4px;
    font-size:11px;
    font-family: 'Noto Sans KR', sans-serif;
    display:flex;
    align-items:center;
    overflow:hidden;
`;

export default Bingobox;