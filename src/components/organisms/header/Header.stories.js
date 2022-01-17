import Header from "./header";

export default {
    title:"organisms/Header",
    component:Header
}
const Template = (args) => <Header {...args} />;
export const AvatarHeader = Template.bind({});
AvatarHeader.args={
    avatar:true,
    avatarLatter:'A',
    explore:false,
    openSearch:undefined
}