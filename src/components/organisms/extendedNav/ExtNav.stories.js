import ExtendedNav from "./extendedNav";
import NavBar from "../extNavbar/navBar";

export default{
    title:"organisms/ExtendedNavBar",
    component:ExtendedNav
}
const Template=(args)=> <ExtendedNav {...args}></ExtendedNav>
export const Navbar = Template.bind({});
NavBar.args={
    name:"hello"
};