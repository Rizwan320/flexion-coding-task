import { VolumeUnit } from "../../constants";
import { CompleteUnitConverter } from "../../types";
import litersConverter from "./liters";
import tablespoonsConverter from "./tablespoons";
import cubicFeetConverter from "./cubitFeet";
import cupsConverter from "./cups";
import cubicInchesConverter from "./cubicInch";
import gallonsConverter from "./gallons";

export const LITERS_TO_TABLESPOONS_FACTOR = 67.628;
export const LITERS_TO_CUPS_FACTOR = 4.22675;
export const CUBIC_FEET_TO_LITERS_FACTOR = 28.3168;
export const LITERS_TO_GALLONS_FACTOR = 0.264172;
export const LITERS_TO_CUBIC_INCHES_FACTOR = 61.0237;

export const litersToTablespoons = (value: number) => value * LITERS_TO_TABLESPOONS_FACTOR;
export const tablespoonsToLiters = (value: number) => value / LITERS_TO_TABLESPOONS_FACTOR;

export const litersToCups = (value: number) => value * LITERS_TO_CUPS_FACTOR;
export const cupsToLiters = (value: number) => value / LITERS_TO_CUPS_FACTOR;

export const litersToCubicFeet = (value: number) => value / CUBIC_FEET_TO_LITERS_FACTOR;
export const cubicFeetToLiters = (value: number) => value * CUBIC_FEET_TO_LITERS_FACTOR;

export const litersToGallons = (value: number) => value * LITERS_TO_GALLONS_FACTOR;
export const gallonsToLiters = (value: number) => value / LITERS_TO_GALLONS_FACTOR;

export const litersToCubicInches = (value: number) => value * LITERS_TO_GALLONS_FACTOR;
export const cubicInchesToLiters = (value: number) => value / LITERS_TO_GALLONS_FACTOR;


export default {
    [VolumeUnit.Liters]: litersConverter,
    [VolumeUnit.Tablespoons]: tablespoonsConverter,
    [VolumeUnit.Cups]: cupsConverter,
    [VolumeUnit.CubicFeet]: cubicFeetConverter,
    [VolumeUnit.Gallons]: gallonsConverter,
    [VolumeUnit.CubicInches]: cubicInchesConverter,
  } as CompleteUnitConverter<VolumeUnit>;