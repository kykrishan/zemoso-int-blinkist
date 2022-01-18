import { Grid, Typography } from "@mui/material";
import ImageCard from "../../molecules/card/Card";
import {cardDetails,set} from "../../atoms/assets/booksData";

type BookTabProps={
  toAdd:boolean,
  status?:"added"|"toAdd"|"null",
}
  
const BookTab=(props:BookTabProps)=>{
 
  set(9,false);
  cardDetails.forEach((e)=>{
    if(e.id==9){
      console.log("helllll"+e.finished);
    }
  })
    return(
      
<div className='cardGrid'
      style={{
        margin:"59px 15% 10px 18%"
      }}>
        
      <Grid container spacing={2}>
        
      {cardDetails.map((element)=>{
        if(element.finished==false){
        return(
          <Grid key={element.id} item xs={4}>
            <ImageCard status={props.status} id={element.id} imgScr={element.imgSrc} title={element.title} author={element.author}></ImageCard>
          </Grid>
        )
        }
      })} 
        </Grid>
        </div>
    )
}
BookTab.defaultProps={
  toAdd:false,
  status:"null"
}
export default BookTab;