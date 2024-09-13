import { enumValuesToStringArray } from "@/utils/enum";


export enum TemperatureUnit {
  Kelvin = "Kelvin",
  Celsius = "Celsius",
  Fahrenheit = "Fahrenheit",
  Rankine = "Rankine",
}

export enum VolumeUnit {
  Liters = "Liters",
  Tablespoons = "Tablespoons",
  Cups = "Cups",
  CubicFeet = "CubicFeet",
  CubicInches = "CubicInches",
  Gallons = "Gallons",
}

/*
    Create keys for the quantities so we do not have do this everytime we need the keys.
*/
export const quantityUnitKeys = [
  ...enumValuesToStringArray(TemperatureUnit),
  ...enumValuesToStringArray(VolumeUnit),
];
