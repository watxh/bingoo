import styled from "styled-components";
import React, { Component, useState } from "react";
import axios from 'axios';

import Example from "../molecules/Example"
import Exmake2 from "../molecules/Exmake2"
import Success from "../molecules/Success"

import download from "downloadjs"
import * as htmlToImage from 'html-to-image';
import moment from "moment"

import { storage } from '../../firebase'

const Makingsection = () => {

    const [title, setTitle] = useState("제목");
    const [subtitle, setSubtitle] = useState("부제목");

    const [backcolor, setBackcolor] = useState("#000000");
    const [titlecolor, setTitlecolor] = useState("#ffffff");
    const [subtitlecolor, setSubtitlecolor] = useState("#ffffff");

    const [bingoarray, setBingoarray] = useState([{ word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }, { word: "" }]);

    const [address, setAddress] = useState("");
    const [issuccess, setIssuccess] = useState(0);

    const [rownum, setRownum] = useState("1");
    const [columnnum, setColumnnum] = useState("1");

    const [like, setLike] = useState(0);

    const [backImage, setBackImage] = useState(null);

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

    const changecolnum = (e) => {
        setColumnnum(e);
    }

    const changerownum = (e) => {
        setRownum(e);
    }

    const changebingoarray = (con, num) => {
        setBingoarray(() => {
            let newarray = [...bingoarray];
            newarray[num] = { word: con };
            return newarray;
        });
    }

    const changebackimage = (e) => {
        setBackImage(e);
    }

    const changesuccess = (e, f) => {
        imageStorage(e, f);
    }

    function randomStr(m) {
        var m = m || 9;
        var s = '';
        var r = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < m; i++) { s += r.charAt(Math.floor(Math.random() * r.length)); }
        return s;
    };

    const imageStorage = async (e, f) => {
        setIssuccess(2);
        function test(titleurl) {
            if (f) {
                var backname = moment().format('YYYYMMDDHHmmss') + "_" + f.name;
                const uploadTask2 = storage.ref(`backimages/${backname}`).put(f);
                uploadTask2.on(
                    "state_changed",
                    snapshot => { },
                    error => {
                        console.log(error);
                    },
                    () => {
                        storage
                            .ref("backimages")
                            .child(backname)
                            .getDownloadURL()
                            .then(url => {
                                postdata(titleurl, url);
                            })
                    }
                )
            }
        }
        var name = moment().format('YYYYMMDDHHmmss') + "_" + e.name;
        const uploadTask = storage.ref(`images/${name}`).put(e);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(name)
                    .getDownloadURL()
                    .then(url => {
                        test(url);
                    })
            }
        )
    }

    const postdata = async (url, backurl) => {
        var id = "/" + randomStr(5);
        function sic() {
            if (backcolor) {
                const params = new URLSearchParams({
                    id,
                    title,
                    subtitle,
                    backcolor: (Object.entries(backcolor)[1][1]),
                    titlecolor: (Object.entries(titlecolor)[1][1]),
                    subtitlecolor: (Object.entries(subtitlecolor)[1][1]),
                    imageURL: url,
                    backimageURL: null,
                });
                return params;
            } else {
                const params = new URLSearchParams({
                    id,
                    title,
                    subtitle,
                    backcolor: null,
                    titlecolor: (Object.entries(titlecolor)[1][1]),
                    subtitlecolor: (Object.entries(subtitlecolor)[1][1]),
                    imageURL: url,
                    backimageURL: backurl,
                });
                return params;
            }
        }
        const params = sic();

        for (let i = 0; i < 25; i++) {
            if (bingoarray[i].word != undefined) {
                params.append('bingoarray', bingoarray[i].word);
            }
        }

        params.append('like', like);

        /*params.append('id', id);
        params.append('title', title);
        params.append('subtitle', subtitle);
        params.append('backcolor', (Object.entries(backcolor)[1][1]));
        params.append('titlecolor', (Object.entries(titlecolor)[1][1]));
        params.append('subtitlecolor', (Object.entries(subtitlecolor)[1][1]));*/

        const a = await axios.post('https://bingoback.herokuapp.com/users/b', params);
        console.log(a);
        setAddress(id);

        test();
        setTimeout(function(){
            setIssuccess(1);
        },[700])
    }

    const test = () => {
        var a = document.getElementById('testing'),
            style = window.getComputedStyle(a),
            height = style.getPropertyValue('height');

        var b = document.getElementById('testing2'),
            style = window.getComputedStyle(a),
            height2 = style.getPropertyValue('height');

        a.animate([
            { height: height },
            { height: '400px' }
        ], {
            duration: 800,
            fill: "both",
        });

        b.animate([
            { height: height2 },
            { height: '400px' }
        ], {
            duration: 800,
            fill: "both",
        });
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
            <Container>
                <Example
                    title={title}
                    subtitle={subtitle}
                    backcolor={backcolor}
                    titlecolor={titlecolor}
                    subtitlecolor={subtitlecolor}
                    bingoarray={bingoarray}
                    changerownum={changerownum}
                    changecolnum={changecolnum}
                    backImage={backImage}
                    rownum={rownum}
                    columnnum={columnnum}
                >
                </Example>
                <Centerline></Centerline>
                <Exmake2
                    changetitle={changetitle}
                    changesubtitle={changesubtitle}
                    changebackcolor={changebackcolor}
                    changetitlecolor={changetitlecolor}
                    changesubtitlecolor={changesubtitlecolor}
                    changebingoarray={changebingoarray}
                    changebackimage={changebackimage}
                    bingoarray={bingoarray}
                    changesuccess={changesuccess}
                    rownum={rownum}
                    columnnum={columnnum}
                />
                {issuccess !== 0 ? <>{issuccess === 2 ? <Success></Success> : <Success props={address} end="1"></Success>}</> : <></>}
            </Container>
        </>
    );
}

const Container = styled.div`
    overflow-y:hidden;
`

const Centerline = styled.div`
    position:fixed;
    width:1px;
    height:100%;
    background-color:#555555;
    left:73%;
    top:65px;
`;

export default Makingsection;