import Tab from "./tab";

export default {
    title:"atom/Tab",
    component:Tab
}
const Template= (args) => <Tab {...args} />;
export const NavTabar = Template.bind({});
NavTabar.args={
    title:'Currently reading',
    isActive:true
}