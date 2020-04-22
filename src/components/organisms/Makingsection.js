import styled from "styled-components";
import React, { Component, useState } from "react";
import axios from 'axios';

import Example from "../molecules/Example"
import Exmake from "../molecules/Exmake"
import Success from "../molecules/Success"

import download from "downloadjs"
import * as htmlToImage from 'html-to-image';

const Makingsection = () => {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const [backcolor, setBackcolor] = useState("#000000");
    const [titlecolor, setTitlecolor] = useState("#ffffff");
    const [subtitlecolor, setSubtitlecolor] = useState("#ffffff");

    const [bingoarray, setBingoarray] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    const [issuccess, setIssuccess] = useState(0);

    const changetitle = (name) => {
        setTitle(name);
    }

    const changesubtitle = (name) => {
        setSubtitle(name);
    }

    const changebackcolor = (color) => {
        setBackcolor(color);
    }

    const changetitlecolor = (color) => {
        setTitlecolor(color);
    }

    const changesubtitlecolor = (color) => {
        setSubtitlecolor(color);
    }

    const changebingoarray = (con, num) => {
        setBingoarray(() => {
            let newarray = [...bingoarray];
            newarray[num] = { value: con };
            return newarray;
        });
    }

    const changesuccess = () =>{
        postdata();
        setIssuccess(1);
    }

    const postdata = async() =>{
        const params = new URLSearchParams();
        params.append('id', "/tv123");
        params.append('title', title);
        params.append('subtitle', subtitle);
        params.append('backcolor', (Object.entries(backcolor)[1][1]));
        params.append('titlecolor', (Object.entries(titlecolor)[1][1]));
        params.append('subtitlecolor', (Object.entries(subtitlecolor)[1][1]));
        params.append('bingoarray', bingoarray);

        const a = await axios.post('http://localhost:3001/users/b', params);
        console.log(a);
    }

    // const downloadimage = () => {
    //     htmlToImage.toPng(document.getElementById('all'))
    //         .then(function (dataUrl) {
    //             download(dataUrl, 'my-node.png');
    //         });
    // }

    // const downloadimageP = () => {
    //     downloadimage();
    // }

    return (
        <>
            <div>
                <Example
                    title={title}
                    subtitle={subtitle}
                    backcolor={backcolor}
                    titlecolor={titlecolor}
                    subtitlecolor={subtitlecolor}
                    bingoarray={bingoarray}>
                </Example>
            </div>
            <Centerline></Centerline>
            <Exmake
                changetitle={changetitle}
                changesubtitle={changesubtitle}
                changebackcolor={changebackcolor}
                changetitlecolor={changetitlecolor}
                changesubtitlecolor={changesubtitlecolor}
                changebingoarray={changebingoarray}
                bingoarray={bingoarray}
                changesuccess={changesuccess}
            />
            {issuccess===1 ? <Success/>:<></>}
        </>
    );
}

const Centerline = styled.div`
    position:fixed;
    width:2.5px;
    height:100%;
    background-color:#B5B5B5;
    left:50%;
`;

export default Makingsection;