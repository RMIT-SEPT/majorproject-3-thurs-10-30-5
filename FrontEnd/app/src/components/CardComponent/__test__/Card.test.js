import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from '../CardComponent.jsx';
import "@testing-library/jest-dom/dist/extend-expect";
import "@testing-library/jest-dom/dist/to-have-text-content";
import { StaticRouter } from 'react-router-dom';

import { render, cleanup } from "@testing-library/react";

//cleanup after each test
afterEach(cleanup);

//test if the website renders without crashing the website
it("Render without crashing the website", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<StaticRouter location="/">
                        <CardComponent  name="Test" button="Test" description="Test"></CardComponent>
                    </StaticRouter>, div);
})

//test if the props are rendered correctly
it("Renders props correctly", ()=>{
    const { getByTestId } = render(<CardComponent  name="Test1" button="Test1" description="Test1"></CardComponent>)
    expect(getByTestId("card-test")).toHaveTextContent("Test1");
})

