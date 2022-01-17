
import ImageCard from "./Card";
import { ThemeProvider } from '@emotion/react';
import ctmtheme from '../../theming/theme';

export default {
    title:"molecules/Card",
    component:ImageCard
}
const Template = (args) =>
<ThemeProvider theme={ctmtheme}>
     <ImageCard {...args} /></ThemeProvider>;
     
export const ImgCard = Template.bind({});
ImgCard.args={
    title:"Bring your human to work",
    alt:"bring human",
    author:"Martin gupta",
    timeRead:"13-min read",
    numberRead:"1.9k reads",
    toAdd:true
};