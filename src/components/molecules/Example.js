import styled, {css} from "styled-components";
import React, { Component } from "react";

const Example = ({
    backcolor={backcolor}
}) =>{
    return(
        <All>
            <Exbox backcolor={backcolor}/>
        </All>
    );
}

const All = styled.div`
    width:50%;
    height:100%;
`;

const Exbox = styled.div`
    position:absolute;
    left:25%;
    top:50%;
    background-color:#000000;
    ${({backcolor}) => backcolor && css`
        background-color:${backcolor.hex};
  ` }
    width:375px;
    height:640px;
    margin-left:-187px;
    margin-top:-285px;
`;

export default Example;