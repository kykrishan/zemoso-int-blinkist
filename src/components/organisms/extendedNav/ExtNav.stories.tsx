import ExtendedNav from "./extendedNav";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default{
    title:"organisms/ExtendedNavBar",
    component:ExtendedNav
}as ComponentMeta<typeof ExtendedNav>
const Template:ComponentStory<typeof ExtendedNav>=()=> <ExtendedNav ></ExtendedNav>
export const Navbar = Template.bind({});
