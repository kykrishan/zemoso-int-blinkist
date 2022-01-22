import Button from '@mui/material/Button';
import React from "react";

type ConnectBtnProps={
    title:string,
    onClick?:()=>void,
}

const ConnectBtn = (props:ConnectBtnProps) => {
    return(
        <Button variant="outlined"
        color='primary'
        sx={{
            width:"296px",
            height:"44px",
            borderRadius:"4px",
            padding:"12px 116px 12px 116px"
        }} onClick={props.onClick}>Connect</Button>
    )
}
export default ConnectBtn;