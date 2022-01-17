import { Typography } from "@mui/material";
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import SettingsBackupRestoreSharpIcon from '@mui/icons-material/SettingsBackupRestoreSharp';
import './navStyle.css';
type NavProps={
    name:string
}

const NavBar=(props:NavProps)=>{
    return(
        <div className="extNav"
        style={{
            backgroundColor:'#F1F6F4'
        }}
        >
            <div className="insideNav"
            style={{
                paddingBottom: '26px',
                margin:'8px 18% 5px 18%'
               
            }}
            >
                <div className="topNav"
                 style={{
                     display:"flex",
                     alignItems:"center",
                     justifyContent: 'space-between',
                    margin:'5px 0px 5px 0px',
                    borderBottom: '2px solid black'
                }}>
                <Typography variant="subtitle2">
                    Explore by category
                </Typography>
                <Typography variant="subtitle2">
                    See recent added titles
                </Typography>
                <Typography variant="subtitle2">
                    See popular titles
                </Typography>
                </div>
                <div className="bottomNav"
                style={{

                    margin:'5px 4px 5px 2px'
                    
                }}
                >  
                <table>
                    <tr>
                        <td>
                            <div className='barHover'>
                            <NotificationsNoneSharpIcon></NotificationsNoneSharpIcon>
                        <Typography variant="body2">
                    Entrepreneurship</Typography>
                            </div>
                        
                        </td>
                        <td>
                            <div>
                            <AccountBalanceSharpIcon></AccountBalanceSharpIcon>
                            <Typography variant="body2">
                            Political</Typography>
                            </div>
                       
                        </td>
                        <td>
                            <div>
                            <PublicSharpIcon></PublicSharpIcon>
                            <Typography variant="body2">
                            Economics</Typography>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                            <SettingsBackupRestoreSharpIcon />
                            <Typography variant="body2">
                            History
                            </Typography>
                            </div>

                       
                        </td>
                        <td>
                            <div>
                            <Typography variant="body2">Productivity</Typography>
                            </div>
                        
                        </td>
                        <td>
                            <div>
                            <Typography variant="body2">Education</Typography>
                            </div>
                          
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                            <Typography variant="body2">Science</Typography>
                            </div>
                        
                        </td>
                        <td>
                            <div>
                            <Typography variant="body2">Markiting & Sales</Typography>
                            </div>
                        
                        </td>
                        <td>
                            <div>
                            <Typography variant="body2">Health & nutrition</Typography>
                            </div>
                        
                        </td>
                    </tr>
                </table>        
                </div>
            </div>
            </div>
    )
}
NavBar.defaultProps={
    name:"hello"
}
export default NavBar;