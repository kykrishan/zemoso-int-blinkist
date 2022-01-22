import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
    
import React from "react";
type LiberaryBtnProp={
onClick?:(event:object)=>void,
}
const LiberaryButton=(props:LiberaryBtnProp)=>{
    
    return(
        <Button variant='contained'
            sx={{width:284,
                height:"52px",
                borderRadius:0,
                backgroundColor:"white",
                color:"blueviolet"
            }}
            onClick={props.onClick}
            
            >
                <AddIcon></AddIcon>
                Add to liberary
            </Button>
    )
}
LiberaryButton.defaultProps={
onclick:()=>console.log("Liberary button clicked"),

}
export default LiberaryButton;