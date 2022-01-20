import { render ,screen} from "@testing-library/react"
import Avatar from "./Avatar";
import React from "react";
import "@testing-library/jest-dom";

it("Is word is visible",async()=>{
    render(<Avatar word="A"></Avatar>);
    const avatar=screen.getByText("A");
    expect(avatar).toBeInTheDocument;
});
it("is avatar visibel",async()=>{
    render(<Avatar word="B"></Avatar>);
    const avatar=screen.getByText("B");
    expect(avatar).toBeInTheDocument;

})