import Tab from "./tab";

export default {
    title:"molecules/Tab",
    component:Tab
}
const Template= (args) => <Tab {...args} />;
export const NavTabar = Template.bind({});
NavTabar.args={
    title:'Currently reading',
    isActive:true
}