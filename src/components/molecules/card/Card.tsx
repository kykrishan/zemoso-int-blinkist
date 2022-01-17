import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { ThemeProvider } from '@emotion/react';
import ctmtheme from '../../../theming/theme';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LiberaryButton from '../button/liberaryButton';
type CardProp={
    id:number,
    imgScr?:string,
title:string,
alt:string,
author:string,
timeRead:string,
numberRead:string,
toAdd:boolean,

}

const ImageCard=(props:CardProp)=>{

    return(
        <div className="card" onClick={(e)=>console.log(e)}>
            <Card sx={[{width:284}
        ,{'&:hover': {
            backgroundColor:'#F1F6F4',
          },
          '&:hover button':{
              backgroundColor:"blueviolet",
              color:"white"
          }
        }]}>
            {console.log(props.id)}
            <a href={'bookDetails/'+props.id}
        style={{
            color:"black",
            cursor:"pointer",
            textDecoration:'none'
        }}>
            <img src={props.imgScr} alt={props.alt} width="283px" height="286px"></img>
            <Typography variant='subtitle1'
            sx={{
                margin: "23px 0px 0px 16px"
            }}>
            {props.title}</Typography>
            <Typography variant='body1'
            sx={{
                display:"block",
                margin: "16px 0px 0px 16px"
            }}
             >{props.author}</Typography>
            <AccessTimeIcon
            sx={{
                height:16.67,
                width:16.67,
                margin:"17.67px 0px 0px 17.67px"
            }}>
            </AccessTimeIcon>
            <Typography variant='caption'>{props.timeRead}</Typography>
            <PersonOutlineIcon
            sx={{
                height:16.67,
                width:16.67,
                margin:"17.67px 0px 0px 44px"
            }}>
            </PersonOutlineIcon>
            
            <Typography variant='caption'>
                {props.numberRead}
            </Typography>
            </a>
           {props.toAdd
           ?<LiberaryButton onClick={(e)=>console.log(e)}></LiberaryButton>
            :<MoreHorizIcon
            sx={{
                display:"block",
                marginLeft:"246px"
            }}
            ></MoreHorizIcon>
            }
            {props.toAdd
            ?undefined
        :<div style={{
            width:"100%",
            height:"10px"
        }}><div style={{
            width:"30%",
            height:"100%",
            backgroundColor:'#E1ECFC'
        }}></div></div>}  
            </Card>
            
        </div>
        
    )
}
ImageCard.defaultProps={
    imgSrc:"images/3.jpg",
title:"Bring your human to work",
alt:"bring human",
author:"Martin gupta",
timeRead:"13-min read",
numberRead:"1.9k reads",
toAdd:false

}
export default ImageCard;