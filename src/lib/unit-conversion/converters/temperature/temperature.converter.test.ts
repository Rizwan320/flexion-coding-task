import { expect } from "@storybook/test";
import "@testing-library/jest-dom";
import {TemperatureUnit} from '../../constants';
import TemperatureConverter from "./index";

describe("Temperature Converter Tests", () => {
    test("Convert Kelvin to Celsius", () => {
      expect(
        TemperatureConverter[TemperatureUnit.Kelvin][TemperatureUnit.Celsius](
          273.15
        )
      ).toBeCloseTo(0);
    });
  
    test("Convert Celsius to Kelvin", () => {
      expect(
        TemperatureConverter[TemperatureUnit.Celsius][TemperatureUnit.Kelvin](0)
      ).toBeCloseTo(273.15);
    });
  
    test("Convert Fahrenheit to Celsius", () => {
      expect(
        TemperatureConverter[TemperatureUnit.Fahrenheit][TemperatureUnit.Celsius](
          32
        )
      ).toBeCloseTo(0);
    });
  
    test("Convert Celsius to Fahrenheit", () => {
      expect(
        TemperatureConverter[TemperatureUnit.Celsius][TemperatureUnit.Fahrenheit](
          0
        )
      ).toBeCloseTo(32);
    });
  
    // Add more test cases for other conversions as needed
  });
  