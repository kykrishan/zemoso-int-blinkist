import ConnectBtn from "./ConnectBtn ";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "molecules/button/ConnectButton",
    component: ConnectBtn
}as ComponentMeta<typeof ConnectBtn>

const Template:ComponentStory<typeof ConnectBtn>= (args) => <ConnectBtn {...args} />;
export const ConnectDefault = Template.bind({});
ConnectDefault.args = {
    title:"connect",
} 