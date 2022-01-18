import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ConnectBtn from "../../molecules/button/connectButton";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
  import {cardDetails as books} from "../../atoms/assets/booksData";
import Tab from "../../molecules/tabs/tab";
import {cardDetails,set} from "../../atoms/assets/booksData";

const BookDetails = () => {
    type bookType={
        title:string,
        id:number,
        author:string,
        imgSrc:string
    }
    const navigate=useNavigate();
    let {bookId}=useParams();
    let urlinputID:string=bookId!;
    let filtered:bookType={title:"helo",id:1,author:" ",imgSrc:""};
    // Object={};
    let urlId:number;
    urlId=parseInt(urlinputID);
    console.log();
    // Function FinishedManager(){

    // }
    return(
        <div>
            
            <Header></Header>
            <div style={{
                margin:"16px 15% 16px 18%"
            }}>
                <Typography variant="body2"> Get the key idea from</Typography>
            {/* {books.map((book)=>book.id==urlId
            ?filtered=book
            :undefined})} */}
            <div style={{
                display:'flex',
                justifyContent:'space-between',
            }}>
                <div style={{
                    marginRight:'125px',
                }}>
                {books.forEach((book)=>{
             if(book.id==urlId)filtered=book;
            })}
            {/* {   console.log(filtered)}             */}
            <Typography variant="h1">{filtered.title}</Typography>
            <Typography variant="subtitle2">Turning Your Business into an Enduring Great Company</Typography>
            <Typography variant="body1">{filtered.author}</Typography>
            <Button sx={{
                marginRight:'10px',
                borderRadius:"0px"
            }} variant="outlined">Read More</Button>
            <Button sx={{borderRadius:"0px",
            }}onClick={()=>{
                set(urlId,true);
                navigate("/")
            }
                } variant="contained">Finished Reading</Button>
            {/* <ConnectBtn variant="contained" title="Finished Reading" ></ConnectBtn> */}
                </div> 
                <div>
            <img src={filtered.imgSrc}></img>
            </div>
            </div>
            <div style={{
                margin:"2px 0px 15px 0px"
            }}>
                <Tab title="Synopsis" isActive={true}></Tab>
                <Tab title="What is for?" isActive={false}></Tab>
                <Tab title="About the author" isActive={false}></Tab>
            </div>
            <div>
                <Typography variant="body2">
                Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential
                <br/> 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs,
                <br/> visionaries, and innovators of today. This new edition combines the timeless
                <br></br> business advice and strategy of the original text, supplemented with
                 <br></br>cutting-edge insights and case studies pertinent to today’s business world.
                </Typography>
            </div>
            
            

            </div>
            
            <Footer></Footer>

        </div>
    )
}
export default BookDetails;
