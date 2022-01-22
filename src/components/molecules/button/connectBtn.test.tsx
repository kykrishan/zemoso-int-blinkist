import { render ,screen} from "@testing-library/react"
import ConnectBtn from "./ConnectBtn ";
import React from "react";
import "@testing-library/jest-dom";

it("Is button is visible",async()=>{
    render(<ConnectBtn title="connect"></ConnectBtn>);
    const connectBtn=screen.findByText("connect");
    expect(connectBtn).toBeInTheDocument;
});