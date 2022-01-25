import { Box, Typography } from "@mui/material";
import Logo from "../../atoms/logo/logo";
import NavSelection from "../navSelection/NavSelection";
import React from "react";

const Footer=()=>{
    return(
<Box
sx={{
    background:"#F1F6F4",
    width:"100%",
    height:"370px",
    paddingLeft:"18%",
    paddingTop:"38px",
    boxSizing:"border-box"
}}>
    <div style={{
        display:'flex',
        flexDirection:'row'
    }}>

    
    <div style={{
        display:'flex',
        flexDirection:'column',
    }}>
    <Logo></Logo>
    <Typography sx={{
        fontWeight:"500",
        fontStyle:"normal",
        fontSize :"24px",
        lineHeight:"32px",
        color:"#0365F2",
        width: '368px'
    }} variant='subtitle1'>
    Big ideas in small packages
    <br></br>
Start learnign now
    </Typography>
    </div>
    
<NavSelection></NavSelection>
</div>
<Box sx={{
    marginTop:'48px'
}
}>
    <Typography variant='caption'>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
</Box>
</Box>
    )
}
export default Footer;