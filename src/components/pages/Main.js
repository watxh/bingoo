import styled from "styled-components";
import React, { Component } from "react"
import axios from "axios"
import { useState } from "react";

const Main = () =>{

    const getList = async() => {
        var testarray = [];
        testarray = (await axios.get('http://localhost:3002/users/a')).data;
        function customsort(a,b){
            if(a.like == b.like){ return 0} return a.like > b.like ? 1 : -1;
        }
        testarray.sort(customsort);
        return testarray;
    }

    return(
        <>
        {console.log(getList())}
        </>
    )
}

export default Main;