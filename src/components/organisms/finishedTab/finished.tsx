import { Grid } from "@mui/material"
import {cardDetails,set} from "../../atoms/assets/booksData";
import ImageCard from "../../molecules/card/Card"


type FinishedTabProps={
    toAdd:boolean,
    sts?:"added"|"toAdd"|"null",
  }

const FinishedTab = (props:FinishedTabProps) => {
    return(
<div className='cardGrid'
      style={{
        margin:"59px 15% 10px 18%"
      }}>
        
      <Grid container spacing={2}>
        
      {cardDetails.map((element)=>{
          if(element.finished){

         
        return(
          <Grid key={element.id} item xs={4}>
            <ImageCard status={props.sts} id={element.id} imgScr={element.imgSrc} title={element.title} author={element.author}></ImageCard>
          </Grid>
        )
        
}})} 
        </Grid>
        </div>
    )
    
}
FinishedTab.defaultProps={
    toAdd:false,
    status:"null"
  }
export default FinishedTab
