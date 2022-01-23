import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import React from "react";


// type SearchBarProps={
//   style:object;
// }

 const SearchBar=()=>{
return(
    <TextField
    sx={{
     
      width:"598px",
      height:"28px"
    }}
    id="input-with-icon-textfield"
    placeholder='Search by title or author'
    InputProps={{
      startAdornment: (
        <InputAdornment position="start"
        >
          <SearchIcon/>
        </InputAdornment>
      ),
    }}
    variant="standard"
    size='medium'
  />

)
}
export default SearchBar;