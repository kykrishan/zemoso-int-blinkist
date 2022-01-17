import Entrepreneurship from "./entrepreneurship";
import { ThemeProvider } from "@emotion/react";

import ctmtheme from '../../../stories/theming/theme';

export default{
    title:'page/Entrepreneur',
    component:Entrepreneurship
}
const Template=()=>
<ThemeProvider theme={ctmtheme}> <Entrepreneurship></Entrepreneurship></ThemeProvider>;
export const Entrepreneur= Template.bind({});