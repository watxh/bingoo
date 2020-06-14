import styled from "styled-components";
import React, { Component, useState } from "react"
import axios from "axios"
import moment from "moment"

import { storage } from '../../firebase'

const Test = () => {

    const [image, setImage] = useState(null);

    const onChange = (e) => {
        setImage(e.target.files[0]);
    }

    const onClick = async () => {
        // const formData = new FormData();
        // formData.append('file', img);
        // // 서버의 upload API 호출
        // const res = await axios.post("http://localhost:3001/users/up", formData);
        // console.log(res);
        const uploadTask = storage.ref(`images/${moment().format('YYYYMMDDHHmmss') + "_" + image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot=> {},
            error => {
                console.log(error);
            },
            ()=>{
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                    })
            }
        )
    }

    return (
        <>
            <input type="file" onChange={onChange} />
            <button onClick={onClick}>제출</button>
        </>
    )
}

export default Test;