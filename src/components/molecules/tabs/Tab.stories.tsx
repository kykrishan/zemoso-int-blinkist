import Tab from "./tab";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:"molecules/Tab",
    component:Tab
}as ComponentMeta<typeof Tab>
const Template:ComponentStory<typeof Tab>= (args) => <Tab {...args} />;
export const NavTabar = Template.bind({});
NavTabar.args={
    title:'Currently reading',
    isActive:true
}