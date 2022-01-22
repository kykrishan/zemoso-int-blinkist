import React from "react";
const Logo =()=>{
    return(
        <div className="logo" style={{display:'inline-block'}}>
              <a href='/'>  <img src={require('.//logo.png')} alt="Blinkist"></img></a>
            </div>
    )
}
export default Logo;