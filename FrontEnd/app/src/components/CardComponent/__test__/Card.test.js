import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from '../CardComponent.jsx';
import "@testing-library/jest-dom/dist/extend-expect";
import "@testing-library/jest-dom/dist/to-have-text-content";
import { StaticRouter } from 'react-router-dom';
import { render, cleanup } from '../../../Utils/TestUtils.jsx';

//Author: CAUCCI, Raymond (s3779722)

//-----------------------------------------------------------------------------
//cleanup after each test
afterEach(cleanup);

//test if the website renders without crashing the website
test('Render without crashing the website', () => {
    expect(() => render(<StaticRouter><CardComponent  name="Test" button="Test" description="Test"></CardComponent></StaticRouter>)).not.toThrowError();
});

//test if the props are rendered correctly
it("Renders props correctly", ()=>{
    const { getByTestId } = render(<StaticRouter><CardComponent  name="Test1" button="Test1" description="Test1"></CardComponent></StaticRouter>)
    expect(getByTestId("card-test")).toHaveTextContent("Test1");
});
//-----------------------------------------------------------------------------

