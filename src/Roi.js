/* eslint-disable no-undef */
import React, { useState } from 'react';
import './App.css';
import { Box } from '@mui/system';


const RoiCalc = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState("", 0);

     

const Formula = () => {
    const ROI = (num1 / num2)* 100;
    setRes(ROI)
} ;

return  (
    <>
    <div className='App'>
        <Box className="Box" >
            Total Amount:
            <br/>
       
        <input 
        className="inputBox"
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
        />
         </Box>
    </div>
    <br/>
    <Box className="Box">
        Initial:
        <br/>
        <input className="inputBox"
        type='number'
        value={num2}
        onChange={(e) => setNum2(parseFloat(e.target.value))}/>
    </Box>
    <br/>
    <button onClick={Formula} className='button'>ROI Total</button>
    <br/>
    <p>Amount: {Math.floor(res)}%</p>
    </>
)
}

export default RoiCalc;