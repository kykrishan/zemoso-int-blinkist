import { render ,screen} from "@testing-library/react"
import ConnectBtn from "./connectButton";

it("Is button is visible",async()=>{
    render(<ConnectBtn></ConnectBtn>);
    const connectBtn=screen.getByRole("button");
    expect(connectBtn).toBeInTheDocument;
});