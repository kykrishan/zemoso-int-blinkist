import { Box, Typography} from "@mui/material";
import { useState } from "react";
import BookTab from "../../organisms/booksTab/bookTab";
import ExtendedNav from "../../organisms/extendedNav/extendedNav";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import Tab from '../../molecules/tabs/tab';
import FinishedTab from "../../organisms/finishedTab/finished";


const EntryPage = () => {
   const [finished,setFinished]=useState(false);
//    const [tab,setTab]=useState(true);
  
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
    <Tab title="Finished" isActive={finished} onClick={()=>setFinished(true)}></Tab>
    </Box>
    
    {finished
    ?<FinishedTab sts="added"></FinishedTab>
    :<BookTab status="null"></BookTab>
    }
      
      <Footer></Footer>
      
        </div>


    )
}
export default EntryPage;
