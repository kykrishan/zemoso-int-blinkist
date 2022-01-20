import { render ,screen} from "@testing-library/react";
import Tab from "./tab";

it("Is tab is visible",async()=>{
    render(<Tab title="hello"></Tab>);
    const logo=screen.getByText("hello");
    expect(logo).toBeInTheDocument;
});
it("Is tab is visible",async()=>{
    render(<Tab title="12"></Tab>);
    const logo=screen.getByText("12");
    expect(logo).toBeInTheDocument;
});