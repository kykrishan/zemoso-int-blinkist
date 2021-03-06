import { Grid} from "@mui/material";
import ImageCard from "../../molecules/card/ImageCard";
import {cardDetails,set} from "../../atoms/assets/booksData";
import React from "react";

type BookTabProps={
  toAdd:boolean,
  status?:"added"|"toAdd"|"null",
  finishset?:()=>void,
  book?:[{
    id:number,
    imgSrc:string,
    author:string,
    timeRead:string,
    numberReads:string,
    finished:boolean,
  }]
}
  
const BookTab=(props:BookTabProps)=>{

  set(9,false);
  
    return(
      
<div className='cardGrid'
      style={{
        margin:"59px 15% 10px 18%"
      }}>
        
      <Grid container spacing={2}>
        
      {cardDetails.map((element)=>{
        /* istanbul ignore else */
        if(element.finished===false){
        return(
          <Grid key={element.id} item xs={4}>
            <ImageCard finishset={props.finishset} status={props.status} id={element.id} imgScr={element.imgSrc} title={element.title} author={element.author}></ImageCard>
          </Grid>
        )
        }else{
          return undefined;
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