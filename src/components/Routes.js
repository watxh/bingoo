import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios"

import Dobingo from "../components/organisms/Dobingo"
import Maker from "../components/pages/Maker"

const Routes = () =>{

    const [data, setData] = useState([]);

    useEffect(async()=>{
        const a = await axios.get('http://localhost:3001/users/a');
        setData(a.data);
    },[])

    return(
        <Router>
            <Route exact path="/" component={Maker}/>
            {data.map((data) =>(
                <>
                <Route path={data.id} component={() => <Dobingo data={data}/>}/>
                </>
            ))}
        </Router>
    )
}

export default Routes;