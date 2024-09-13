import { TemperatureUnit } from "../../constants";
import { CompleteUnitConverter } from "../../types";

import kelvinConverter from './kelvin';
import celsiusConverter from './celsius';
import fahrenheitConverter from "./fahrenheit";
import rankineConverter from "./rankine";

export const KELVIN_CONSTANT = 273.15;

export const KELVIN_TO_FAHRENHEIT_FACTOR = 9 / 5;
export const FAHRENHEIT_TO_KELVIN_FACTOR = 5 / 9;

export const FAHRENHEIT_CONSTANT = 459.67;

export const KELVIN_TO_RANKINE_FACTOR = 9 / 5;

export const kelvinToCelsius = (value: number) => value - KELVIN_CONSTANT;
export const celsiusToKelvin = (value: number) => value + KELVIN_CONSTANT;

export const kelvinToFahrenheit = (value: number) => (value * KELVIN_TO_FAHRENHEIT_FACTOR) - FAHRENHEIT_CONSTANT;
export const fahrenheitToKelvin = (value: number) => (value + FAHRENHEIT_CONSTANT) * FAHRENHEIT_TO_KELVIN_FACTOR;

export const kelvinToRankine = (value: number) => value * KELVIN_TO_RANKINE_FACTOR;
export const rankineToKelvin = (value: number) => value / KELVIN_TO_RANKINE_FACTOR;


export default {
    [TemperatureUnit.Kelvin]: kelvinConverter,
    [TemperatureUnit.Celsius]: celsiusConverter,
    [TemperatureUnit.Fahrenheit]: fahrenheitConverter,
    [TemperatureUnit.Rankine]: rankineConverter,
  } as CompleteUnitConverter<TemperatureUnit>;