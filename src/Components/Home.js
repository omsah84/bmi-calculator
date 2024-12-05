import React, { useState } from 'react'
import Styled from './Home.module.scss';

export default function Home() {
    let [weight,onchangeweight] = useState();
    let [height,onchangeheight] = useState();

    let [result, changeresult] = useState('');
    let [content, changecontent] = useState('');


    let inputChange1 = (event)=>{
        let inpt1 = event.target.value;
        onchangeweight(inpt1);
    };

    let inputChange2 = (event)=>{
        let inpt = event.target.value;
        onchangeheight(inpt);
    };

    let eventHandlar = ()=>{
        if(weight !== '' && height !== ''){
            let ans = Math.ceil(weight/(height*height));
            changeresult(ans);
            changecontent("Successfully..");
        }
        else{
            let ans = "Invalid value";
            changeresult(ans);
            changecontent("Input error..");
        }
    };

    let eventChange = ()=>{
        onchangeheight("");
        onchangeweight("");
    };

    return (
        <div>
            <div className={Styled.home}>
                <div className={Styled.sub_home}>
                    <div><h2>BMI Calculator</h2></div>
                    <div className={Styled.container}>
                        <div className={Styled.label}>
                            <label className={Styled.heading} >Weight (Kg) </label><br />
                            <input className={Styled.input} type='number' value={weight} onChange={inputChange1} />
                        </div>
                        <div className={Styled.label}>
                            <label className={Styled.heading} >Height (Meter) </label><br />
                            <input className={Styled.input} type='number' value={height} onChange={inputChange2} />
                        </div>
                        <div >
                            <button className={Styled.submit} type='submit' onClick={eventHandlar} >Submit</button><br />
                            <button className={Styled.submit}  onClick={eventChange}>Relodad</button>
                        </div>
                    </div>
                </div>
                <div>
                  <h2>Your BMI is: {result}</h2><br/>
                  <h5>You are {content}</h5>
                </div>
            </div>
        </div>
    )
}
