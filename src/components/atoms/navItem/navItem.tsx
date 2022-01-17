import { Link } from "@mui/material";
type NavItemProps={
    title:string,
}

const NavItem=(props:NavItemProps)=>{
    return(
<Link>
{props.title}
</Link>
    )
}
export default NavItem;