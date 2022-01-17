import { Box, Typography} from "@mui/material";
import { useState } from "react";
import BookTab from "../../organisms/booksTab/bookTab";
import ExtendedNav from "../../organisms/extendedNav/extendedNav";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import Tab from '../../atoms/tabs/tab';


const EntryPage = () => {
   const [finished,setFinished]=useState(false);
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
    <Tab title='Continue reading' isActive={true}></Tab>
    <Tab title="Finished" isActive={false} onClick={()=>setFinished(!finished)}></Tab>
    </Box>
      <BookTab></BookTab>
      <Footer></Footer>
      
        </div>


    )
}
export default EntryPage;
