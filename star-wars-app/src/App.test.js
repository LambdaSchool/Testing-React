import React from "react" ;
import * as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import  App from "./App"
import StarWarsCharacters from "./components/StarWarsCharacters";

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

test("previous button", async() => {
    const wrapper = rtl.render(<StarWarsCharacters/>);

    // await wrapper.getByText (/chracter/i) ;

     const prevBtn = wrapper.getByText(/previous/i);

     rtl.act(() => {
 
         rtl.fireEvent.click(prevBtn);
     });

     expect(wrapper.getByText(/previous/i));

} );

test("next button", async() => {
    const wrapper = rtl.render(<StarWarsCharacters/>);

    // await wrapper.getByText (/chracter/i) ;

     const nextBtn = wrapper.getByText(/next/i);

     rtl.act(() => {
 
         rtl.fireEvent.click(nextBtn);
     });

     expect(wrapper.getByText(/next/i));

} );