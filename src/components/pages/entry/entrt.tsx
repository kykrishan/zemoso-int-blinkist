import { Box, Typography} from "@mui/material";
import { useState } from "react";
import BookTab from "../../organisms/booksTab/bookTab";

import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import Tab from '../../molecules/tabs/tab';

import FinishedTab from "../../organisms/finishedTab/FinishedTab";


const EntryPage = () => {
    
   const [finished,setFinished]=useState(false);

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
