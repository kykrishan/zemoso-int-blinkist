import { Box, Typography} from "@mui/material";
import { useState } from "react";
import BookTab from "../../organisms/booksTab/bookTab";
import ExtendedNav from "../../organisms/extendedNav/extendedNav";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import Tab from '../../molecules/tabs/tab';
import {cardDetails,set} from "../../atoms/assets/booksData";
import FinishedTab from "../../organisms/finishedTab/finished";

type bookType=[{
        id:number,
        imgSrc:string,
        author:string,
        timeRead:string,
        numberReads:string,
        finished:boolean,
      }]


const EntryPage = () => {
    
   const [finished,setFinished]=useState(false);
// //    const [tab,setTab]=useState(true);
//   const [book,setBook]=useState(cardDetails);
//   console.log(book);
const handleFinish=()=>{
    setFinished(false);
}

    return(
        <div>
    <Header avatar={false} explore={false} openSearch={()=>console.log("hello")} ></Header>
    <Box sx={{
        margin:"59px 15% 8px 18%"
    }}>
    <Typography variant='h1'
    sx={{
        marginBottom:"60px"
        }}>My Liberay</Typography>
    <Tab title='Continue reading' isActive={!finished} onClick={()=>setFinished(false)}></Tab>
    <Tab title="Finished"  isActive={finished} onClick={()=>setFinished(true)}></Tab>
    </Box>
    
    {finished
    ?<FinishedTab finishset={handleFinish} sts="added"></FinishedTab>
    :<BookTab finishset={handleFinish} status="null"></BookTab>
    }
      
      <Footer></Footer>
      
        </div>


    )
}
export default EntryPage;
