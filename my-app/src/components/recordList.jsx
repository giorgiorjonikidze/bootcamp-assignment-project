import React from 'react';
import { useHistory } from 'react-router-dom';

const RecordList = () => {
    const history = useHistory();
    const goBackHandler = () => {
        const path = 'lastpage'
        history.pushState(path)
    }
    return (<div>
        <button onClick={goBackHandler}>back</button>
        <h1>ჩანაწერების სია</h1>
        <ul>
            <li>sia</li>
        </ul>
    </div>);
}
 
export default RecordList;