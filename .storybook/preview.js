// import {ctmtheme} from '../src/theming/theme.js';

// import { ThemeProvider } from '@emotion/react';
// import { createMuiTheme } from '@mui/material/styles';
// import { addDecorator } from '@storybook/react';
// import { withThemes } from '@react-theming/storybook-addon';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// // addDecorator((story) => (
// //   <ThemeProvider theme={ctmtheme}>{story()}</ThemeProvider>
// // ));
// const providerFn = ({ ctmtheme, children }) => {
//   const muTheme = createMuiTheme(ctmtheme);
//   return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
// };

// // pass ThemeProvider and array of your themes to decorator
// addDecorator(withThemes(null, [ctmtheme], { providerFn }));