import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Maker from "../components/pages/Maker"

export default ()=>(
    <Router>
        <Route path="/" component={Maker}/>
    </Router>
)