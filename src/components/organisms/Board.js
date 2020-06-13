import styled from "styled-components";
import React, { Component, useState } from "react";
import axios from 'axios';

import BoardCard from "../molecules/BoardCard"

const Board = () =>{

    const [data, setData] = useState([]);

    const getList = async() => {
        var testarray = [];
        testarray = (await axios.get('http://localhost:3002/users/a')).data;
        function customsort(a,b){
            if(a.like == b.like){ return 0} return a.like > b.like ? -1 : 1;
        }
        testarray.sort(customsort);
        setData(testarray);
    }

    return (
        <>{<button onClick={getList}></button>}
            <Container>
                
                <CardList>
                    {data.map((data) => (
                        <BoardCard data={data}></BoardCard>
                    ))}
                </CardList>
            </Container>
        </>
    )
}

const Container = styled.div`
    width:100%;
    justify-content:center;
    display:flex;
`;

const CardList = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:1500px;
`; 

export default Board;