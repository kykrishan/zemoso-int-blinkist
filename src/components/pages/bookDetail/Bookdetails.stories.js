import BookDetails from "./bookDetails";
import { ThemeProvider } from "@emotion/react";

import ctmtheme from '../../../stories/theming/theme';

export default{
    title:'page/bookDetails',
    component:BookDetails
}
const Template=()=>
<ThemeProvider theme={ctmtheme}> <BookDetails></BookDetails></ThemeProvider>;
export const Details= Template.bind({});