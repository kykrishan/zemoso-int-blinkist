import { Typography } from "@mui/material";
import React from "react";

const NavSelection=()=>{
    return(
        <div style={{
            display: "flex"
        }} >
            <div style={{
                display:'flex',
                flexDirection: 'column',
                width:'214px'
            }}>
            <Typography variant="body1"
            sx={{
                marginBottom:'16px'
            }}>Editorial</Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Book List</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">What is Nonfiction?</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">What to read next?</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Benefits of reading</a></Typography>   
            </div>
            <div
             style={{
                display:'flex',
                flexDirection: 'column',
                width:'214px'
            }}>
            <Typography variant="body1"
            sx={{
                marginBottom:'16px'
            }}>Useful links</Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Pricing</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Blinkist buisness</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Gift Cards</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Blinkst magaine</a></Typography>
            <Typography variant="body2"><a href="/">Contacts & help</a></Typography>
                </div>  
                <div
                 style={{
                    display:'flex',
                flexDirection: 'column',
                width:'214px'
                }}>
                <Typography variant="body1">Company</Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">About</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Careers</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Partners</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a href="/">Code of Conduct</a></Typography>
                    </div> 
                      
        </div>
    )
}
export default NavSelection;