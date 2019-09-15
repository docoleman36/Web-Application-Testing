import React from "react";
import * as rtl from '@testing-library/react'
import { render } from "@testing-library/react";
import { addBall, addStrike, addFoul, addHit } from './Components/Dashboard';

it('renders without crashing', () => {
  render(<App />);
});

test("addStrike works", () => {
  expect(addStrike(0)).toBe(1);
  expect(addStrike(2)).toBe(3);
});

test("addBall Works", () => {
  expect(addBall(0)).toBe(1);
  expect(addBall(2)).toBe(3);
})

test("addFoul Works", () => {
  expect(addFoul(0)).toBe(1);
  expect(addFoul(2)).toBe(2);
})

test("addHit Works", () => {
  expect(addHit(0)).toBe(1);
  expect(addHit(2)).toBe(3);
})