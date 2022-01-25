import Header from "./Header";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
    title:"organisms/Header",
    component:Header
}as ComponentMeta<typeof Header>
const Template:ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const AvatarHeader = Template.bind({});
AvatarHeader.args={
    avatar:true,
    avatarLatter:'A',
    explore:false,
    openSearch:undefined
}