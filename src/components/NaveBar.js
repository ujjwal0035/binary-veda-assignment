import logo from '../images/logo-white.svg';
import React, { useState } from "react";
import "./navebar.css"
import Select from "react-select"
import { BrowserRouter as Router, Link } from "react-router-dom";


const NaveBar = () => {
    const [state,setState] = useState("Sign up free")
    return (
        <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
                <img src={logo} alt="lodo" className="marvel" />
                <h5>  | Devloper</h5>
            </div>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%"}}>
        <Router>
            <div className="nave">
                <Select value="why Marvel" options={[{label:"Hello"},{label:"Hello"},{label:"Hello"}]} />
                <Link className={state==="Enterprice" ? "link cli" : "link"} onClick={()=>{setState("Enterprice")}}>
                    Enterprice
                </Link>
                <Link className={state==="Pricing" ? "link cli" : "link"} onClick={()=>{setState("Pricing")}}>
                    Pricing
                </Link>
                <Link className={state==="Sign in" ? "link cli" : "link"} onClick={()=>{setState("Sign in")}}>
                    Sign in
                </Link>
                <Link className={state==="Sign up free" ? "link cli" : "link"} onClick={()=>{setState("Sign up free")}}>
                    Sign up free
                </Link>
            </div>
        </Router>
        </div>
        </div>
    )
}

export default NaveBar
