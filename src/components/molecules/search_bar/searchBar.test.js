import { render ,screen} from "@testing-library/react"

import SearchBar from "./SearchBar";

it("Is searchbar is visible",async()=>{
    render(<SearchBar></SearchBar>);
    const search=screen.getByPlaceholderText("Search by title or author");
    expect(search).toBeInTheDocument;
});