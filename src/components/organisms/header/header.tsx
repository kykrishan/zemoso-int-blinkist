import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LatterAvatar from '@mui/material/Avatar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './style.css';
import Logo from '../../atoms/logo/logo';
import { useState } from 'react';
import ExtendedNav from '../extendedNav/extendedNav';
import SearchBar from '../../molecules/search_bar/SearchBar';



type HeaderConst={
    avatar:boolean,
    avatarLatter:string,
    search:boolean,
    explore:boolean,
    // openExplore:()=>void,
    // openSearch:Function,
    openSearch:()=>void,
    
}
const Header=(props:HeaderConst)=>{
    const[explr,setExplr]=useState(false);
    const[search,setSearch]=useState(false);

    
    return(
        <div className="header"
        style={{
            padding: '30px 0px 30px 0px',
            backgroundColor:"white",
        }}>
            <div className="inHeader"
            style={{
                marginLeft:"18%",
            display: "flex",
            alignItems:"center"
            
        }}
            >
            <Logo></Logo>
            <SearchIcon
            sx={{
                marginLeft:"43px"
            }}
            onClick={()=>setSearch(!search)}
            ></SearchIcon>
            
            <div className='linkHover'
            style={{
                color:'black',
                marginLeft:"43px",
                display:'flex',
                alignItems:'center'
            }}
            onClick={()=>setExplr(!explr)}>
                
            <Typography
            variant='body1'
            sx={{
                display:'inline-block'
            }}>Explore
            </Typography>
            {explr
            ?<KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            :<KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            }
            </div>
            
            {/* <Typography
            variant='body1'
            
            >Explore</Typography> */}
        <div className="linkHover"
        style={{
            marginLeft:'41px',
        }}>
            <Typography
            variant='body1'
            >MyLiberary</Typography>
            </div>
            <div className='account'
            style={{display:'flex',
            alignItems:'center',
            marginLeft:'40%',
            cursor:'pointer',
        }}>

                {props.avatar
                ?<LatterAvatar >{props.avatarLatter}</LatterAvatar>
                :<Typography
                variant='body1'
                >Account</Typography>
            }
             
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </div>
            </div>
            {search
            ?<SearchBar ></SearchBar>
        :undefined}
            {explr
      ?<ExtendedNav></ExtendedNav>
    :undefined}
        </div>
    )
}
Header.defaultProps={
    avatar:false,
    avatarLatter:'A',
    explore:false,
    search:false,
    openSearch:undefined,
    // openExplore:undefined
}
export default Header;