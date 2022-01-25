import { render, screen } from "@testing-library/react";

import React from "react";
import "@testing-library/jest-dom";
import EntryPage from "./EntryPage";


it("Is entrypage is visible",async()=>{
    render(<EntryPage></EntryPage>);
    const card=screen.findByAltText("My Liberay");
    expect(card).toBeInTheDocument;
});