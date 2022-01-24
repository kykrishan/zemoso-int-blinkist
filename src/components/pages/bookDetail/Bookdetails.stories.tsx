import BookDetails from "./bookDetails";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default{
    title:'page/bookDetails',
    component:BookDetails
}as ComponentMeta<typeof BookDetails>
const Template=()=>
<BookDetails></BookDetails>
export const Details= Template.bind({});