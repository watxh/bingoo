import styled from "styled-components";
import React, { Component } from "react";

const Topbar = () => {
    return (
        <Bar>
            <Barstyle>
                <Logo>
                    <Name>bingo</Name>
                    <Logot></Logot>
                </Logo>
            </Barstyle>
        </Bar>
    );
}

const Barstyle = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const Bar = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 65px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Logo = styled.div`
    background-color: #ff1b1b;
    width:200px;
    height:65px;
    display:flex;
    flex-direction:row;
`;

const Logot = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left:-5px;
    width: 0px;height: 0px;
    border-top: 32.5px solid transparent;
    border-bottom: 32.5px solid transparent;
    border-right: 32.5px solid white;
    border-left: 32.5px solid  transparent;
`;

const Name = styled.div`
    margin-left:43px;
    text-align:center;
    color: white;
    line-height: 65px;
    font-size: 40px;
    font-family: 'Baloo 2', cursive;
    font-weight:600;
`

export default Topbar;