import styled, { keyframes } from "styled-components";
import React, { Component, useState } from "react";
import axios from "axios";
import moment from "moment";

import { storage } from "../../firebase";

const Test = () => {
  return (
    <CircleBox>
      <Circle src="/data/image/icon/redcircle.gif" />
    </CircleBox>
  );
};

const CircleBox = styled.div``;

const Circle = styled.img`
  width: 300px;
  height: auto;
`;

export default Test;
