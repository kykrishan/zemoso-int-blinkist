import { ComponentMeta } from "@storybook/react";
import Logo from "./logo";

export default {
    title:"atom/Logo",
    component:Logo
}as ComponentMeta<typeof Logo>
const Template= () => <Logo></Logo>
export const logo = Template.bind({});
