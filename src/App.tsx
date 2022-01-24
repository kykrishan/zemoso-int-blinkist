
import { ThemeProvider } from '@emotion/react';

import ctmtheme from './theming/theme';

import EntryPage from './components/pages/entry/entrt';
import Entrepreneurship from './components/pages/entrepreneurship/entrepreneurship';
import {BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import BookDetails from './components/pages/bookDetail/bookDetails';




function App() {
  

  return (
    <ThemeProvider theme={ctmtheme}>
    
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage/>}/>
          <Route path="/entrepreneur" element={<Entrepreneurship/>}/>
          <Route path="/bookDetails/:bookId" element={<BookDetails></BookDetails>}/>
          <Route path="*" element={<h1>Page not exist</h1>}></Route>
        </Routes>
      </Router>

   
      </ThemeProvider>

      //hello
  )
}

export default App;
