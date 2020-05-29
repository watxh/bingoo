import styled from "styled-components";
import React, { Component, useState } from "react";

import Example from "../molecules/Example"
import Playbingo from "../molecules/Playbingo"
import Topbar from "../organisms/Topbar"

const Dobingo = (
    data
) => {

    const [bingoarrayA, setBingoarrayA] = useState([]);

    return (
        <>
            <Topbar />
            <Playbingo data={data.data}></Playbingo>
        </>
    )
}

export default Dobingo;