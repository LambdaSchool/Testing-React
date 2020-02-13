import React from "react" ;
import * as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import  App from "./App"

// test("Render the Header img", async() => {
//     const wrapper = rtl.render(<App/>);

//     const element = wrapper.getAllByAltText(/logo/i); 

//     expect(element[0]).toBeVisible();
// });


test("Render the Header img", async() => {
    const wrapper = rtl.render(<App/>);

    const element = await wrapper.findByAltText(/logo/i); 

    expect(element).toBeVisible();
});