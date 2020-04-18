import styled, {css} from "styled-components";
import React, { Component, useState } from "react";

const Bingobox = styled.div`
    width:53px;
    height:53px;
    margin:3px;
    background-color:white;
    border-radius:4px;
    font-size:11px;
    font-family: 'Noto Sans KR', sans-serif;
    display:flex;
    align-items:center;
    overflow:hidden;
    padding:6px;
`;

export default Bingobox;