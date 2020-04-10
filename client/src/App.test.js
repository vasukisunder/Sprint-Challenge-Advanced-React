import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import { render, fireEvent, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';


test("renders App without crashing", () => {
  render(<App />);
});

test('title appears', () => {
  const { getByText } = render(<Header />);
  
  const text = getByText(/women's world cup/i);
  expect(text).toBeInTheDocument();
});


test('tests that dark mode toggle exists', () => {

  const { getByTestId } = render(<Header />);
  const toggle = getByTestId('toggle');
  fireEvent.click(toggle);

});

/* test("tests if api call rendered", () => {
 

  const {getByText} = render(<Display  />);



  const player = 'Andressa Cavalari Machry';


  expect(player).toBeInTheDocument();


  
}); */
