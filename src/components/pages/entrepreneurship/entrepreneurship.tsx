import { Box, Typography } from "@mui/material";
import SearchBar from "../../molecules/search_bar/SearchBar";
import Banner from "../../organisms/banner/banner";
import BookTab from "../../organisms/booksTab/bookTab";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";

const Entrepreneurship = () => {
    const handleFinish=()=>{
       
    }
    
    return(
        <div>
            <Header avatar={true}></Header>
            <Box sx={{
               margin:'10px 0px 10px 18%'
            }}>
                <div style={{
                    margin:"0px 0px 10px 39px"
                }}>
                    <Banner></Banner>
                </div>
                <div
                style={{
                    margin:"40px 0px 32px 0px"
                }}>
                <SearchBar></SearchBar>
                </div>
               
                <Typography variant="h3">Trending Blinks</Typography>
                </Box>
                
                <BookTab finishset={handleFinish} status="toAdd"></BookTab>
            
            <Footer></Footer>

        </div>
    )
}
export default Entrepreneurship;