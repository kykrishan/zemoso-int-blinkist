import { Margin } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";


const ctmtheme=createTheme({
palette:{
    primary:{
        main:'#00C263'
    }
},
typography:{
    fontFamily: [
        'Cera Pro',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    subtitle1:{
        fontFamily:"Cera-Pro",
        fontWeight:700,
        lineHeight:'22.63px',
        fontSize:18,
        textAlign:'left'

    },betasubtitle1:{
        fontSize:'24px'
    },
    subtitle2:{
display:"inline-block",
margin:'30px 0px 20px 0px',
color:'#6D787E'
    },
    h1:{
        fontSize:'36px',
        fontWeight:'700'
    },
    body1:{
textAlign:"left",

    },  
    body2:{
        color:'#6D787E',
    },
    caption:{
        color:'#6D787E',
        fontSize:14,
        textAlign:'top',
        position:"relative",
        bottom: "3px"
    }
}
})
export default ctmtheme;