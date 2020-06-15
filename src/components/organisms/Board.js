import styled from "styled-components";
import React, { Component, useState } from "react";
import axios from 'axios';

import BoardCard from "../molecules/BoardCard"

const Board = () =>{

    const [data, setData] = useState([]);

    const getList = async() => {
        var testarray = [];
        testarray = (await axios.get('http://localhost:3001/users/a')).data;
        function customsort(a,b){
            if(a.like == b.like){ return 0} return a.like > b.like ? -1 : 1;
        }
        testarray.sort(customsort);
        setData(testarray);
    }

    return (
        <>{<button onClick={getList}></button>}
            <Container>
                <TopLine>
                    <PopularButton>인기순</PopularButton>
                    <PopularButton>최신순</PopularButton>
                    <SearchInput placeholder="제목을 입력하세요"></SearchInput>
                </TopLine>
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
`

const PopularButton = styled.div`
    background-color:red;
    width:80px;
    height:35px;
    color:white;
    border-radius:8px;
    line-height:33px;
    text-align:center;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:900;
    font-size:17px;
`

const TopLine = styled.div`
    width:80%;
    display:flex;
    flex-direction:row;
    margin-left:30px;
`

const SearchInput = styled.input`
    width:700px;
    height:35px;
    background-color:#F1F1F1;
    border-radius:12px;
    border-style:none;
    outline:none;
    margin-left:200px;
    padding-left:20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:900;
    font-size:15px;
`

export default Board;