import styled, { css } from "styled-components";
import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

import BoardCard from "../molecules/BoardCard"
import { toNamespacedPath } from "path";
import { isDOMComponent } from "react-dom/test-utils";
import SkeletonCard from "../molecules/SkeletonCard";

const Board = () => {

    const [data, setData] = useState(null);

    const [sort, setSort] = useState(1);

    const [search, setSearch] = useState("");

    useEffect(() => {
        getList(1);
    }, [])

    const getList = async (e) => {
        var testarray = [];
        setData(null);
        testarray = (await axios.get('https://bingoback.herokuapp.com/users/a')).data;

        function timesort(a, b) {
            if (a.time == b.time) { return 0 } return a.time > b.time ? -1 : 1;
        }
        function popularsort(a, b) {
            if (a.like == b.like) { return 0 } return a.like > b.like ? -1 : 1;
        }
        if (e) testarray.sort(popularsort);
        else testarray.sort(timesort);

        let len = testarray.length;
        //console.log(testarray[0].time < testarray[1].time);
        if (search !== "") {
            for (let i = 0; i < len; i++) {
                if (testarray[i].title && !testarray[i].title.includes(search)) {
                    testarray.splice(i, 1);
                    i--;
                    len--;
                }
            }
        }
        setData(testarray);
    }

    const changeSort = (e) => {
        setSort(e);
        getList(e);
    }

    const changeSearch = (e) => {
        setSearch(e.target.value);
    }

    const goSearch = (event) => {
        if (event.key === 'Enter') {
            getList(sort);
        }
    }

    return (
        <Container>
            <TopLine>
                <PopularButton color={sort} onClick={() => { changeSort(1) }}>인기순</PopularButton>
                <PopularButton color={!sort} onClick={() => { changeSort(0) }}>최신순</PopularButton>
                <SearchInput placeholder="제목을 입력하세요" onKeyPress={goSearch} onChange={changeSearch}></SearchInput>
                <SearchButton>검색</SearchButton>
            </TopLine>
            <CardList>
                {data !== null
                    ? <>{data.map((data) => (
                        <BoardCard data={data}></BoardCard>
                    ))} </>
                    : <>{function () {
                        let rows = [];
                        for(var i = 0; i < 25; i++){
                            rows.push(
                                <SkeletonCard/>
                            );
                        }
                        return rows;
                    }()}</>
                }


            </CardList>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    justify-content:center;
    display:flex;
    flex-direction:column;
`;

const CardList = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
`

const TopLine = styled.div`
    width:80%;
    display:flex;
    flex-direction:row;
    margin-left:30px;
    margin-bottom:50px;
    margin-top:85px;
`

const PopularButton = styled.div`
    background-color:#F0F0F0;
    color:black;
    ${({ color }) => color && css`
        background-color: red;
        color:white;
    `};
    width:80px;
    height:35px;
    border-radius:8px;
    line-height:33px;
    text-align:center;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:700;
    font-size:17px;
    cursor:pointer;
`

const SearchInput = styled.input`
    width:680px;
    height:35px;
    background-color:#F1F1F1;
    border-radius:12px;
    border-style:none;
    outline:none;
    margin-left:200px;
    padding-left:20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:700;
    font-size:15px;
`

const SearchButton = styled.div`
    position:relative;
    right:20px;
    background-color:red;
    color:white;
    width:70px;
    height:37px;
    text-align:center;
    line-height:35px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:700;
    font-size:18px;
    border-radius:12px;
`

export default Board;