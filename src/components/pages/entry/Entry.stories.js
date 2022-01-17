import EntryPage from "./entrt";
import { ThemeProvider } from "@emotion/react";

import ctmtheme from '../../../stories/theming/theme';
export default{
    title:'page/Entry',
    component:EntryPage
}
const Template=()=>
<ThemeProvider theme={ctmtheme}> <EntryPage></EntryPage> </ThemeProvider>;
export const Entry= Template.bind({});