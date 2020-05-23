import styled, { css, keyframes } from "styled-components";
import React, { Component, useState, useEffect } from "react";

const Success = (
    props
) => {

    const [address, setAddress] = useState("");

    useEffect(() => {
        setAddress(props.props);
    }, [])

    const CopytoClip = () =>{
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = address;
        
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();

        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

    return (
        <>
            <Cover />
            <Box>
                <Successimage src="/data/image/icon/success.png" />
                <Titletext>성공!</Titletext>
                <Linktext>https://www.bingo.com{address}</Linktext>
                <Buttonline>
                    <Copybutton onClick={CopytoClip}>링크 복사하기</Copybutton>
                    <Startbutton>빙고 하러가기</Startbutton>
                </Buttonline>
            </Box>
        </>
    );
}

const Boxbig = keyframes`
  0% {
      transform: scaleX(0.05) scaleY(0.05);
  }
  60% {
      transform: scaleX(1.03) scaleY(1.03);
  }
  100% {
      transform: scaleX(1) scaleY(1);
  }
`

const Cover = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    left:0px;
    top:0px;
    background-color:rgba(0,0,0,0.3);
`;

const Box = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    width:500px;
    height:330px;
    margin-left:-250px;
    margin-top:-165px;
    background-color:white;
    border-radius:50px;

    display:flex;
    flex-direction:column;
    text-align:center;
    animation: ${Boxbig} 0.8s;
`;

const Successimage = styled.img`
    display:flex;
    width:80px;
    height:80px;
    margin-left: auto;
    margin-right: auto;
    margin-top:35px;
`;

const Titletext = styled.text`
    font-family: 'Do Hyeon', sans-serif;
    font-size:50px;
    margin-top:10px;
    letter-spacing:4px;
`;

const Linktext = styled.text`
    font-family: 'Do Hyeon', sans-serif;
    font-size:23px;
    margin-top:15px;
`;

const Buttonline = styled.div`
    display:flex;
    flex-direction:row;
    width:68%;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;  

const Copybutton = styled.button`
    margin-top:20px;
    background-color:gray;
    border-radius:15px;
    border-style:none;
    width:130px;
    height:40px;
    color:white;
    font-family: 'Nanum Gothic Coding', monospace;
    font-weight: 600;
    font-size:16px;
`

const Startbutton = styled.button`
    margin-top:20px;
    background-color:red;
    border-radius:15px;
    border-style:none;
    width:130px;
    height:40px;
    color:white;
    font-family: 'Nanum Gothic Coding', monospace;
    font-weight: 600;
    font-size:16px;
`

export default Success;