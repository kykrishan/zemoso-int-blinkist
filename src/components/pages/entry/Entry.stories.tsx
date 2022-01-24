import EntryPage from "./entrt";
import { ThemeProvider } from "@emotion/react";

export default{
    title:'page/Entry',
    component:EntryPage
}
const Template=()=> <EntryPage></EntryPage> ;
export const Entry= Template.bind({});