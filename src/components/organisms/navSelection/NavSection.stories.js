import { ThemeProvider } from "@emotion/react";

import ctmtheme from '../../../stories/theming/theme';
import NavSelection from "./NavSelection";
export default{
    title:'organisms/NavSelection',
    component:NavSelection
}
const Template=()=>
<ThemeProvider theme={ctmtheme}> <NavSelection></NavSelection></ThemeProvider>;
export const NavSection= Template.bind({});
