import BookTab from "./bookTab";
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default{
    title:'organism/booltab',
    component:BookTab
}as ComponentMeta<typeof BookTab>
const Template=()=> <BookTab status="toAdd"></BookTab> ;
export const Booktab= Template.bind({});