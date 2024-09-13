import { VolumeUnit } from "../constants";
import { UnitTypeConverter, CompleteUnitConverter } from "../types";

const litersToTablespoons = (value: number) => value * 67.628;
const tablespoonsToLiters = (value: number) => value / 67.628;

const litersToCups = (value: number) => value * 4.22675;
const cupsToLiters = (value: number) => value / 4.22675;

const litersToCubicFeet = (value: number) => value / 28.3168;
const cubicFeetToLiters = (value: number) => value * 28.3168;

const litersToGallons = (value: number) => value * 0.264172;
const gallonsToLiters = (value: number) => value / 0.264172;

const litersToCubicInches = (value: number) => value * 61.0237;
const cubicInchesToLiters = (value: number) => value / 61.0237;

const litersConverter: UnitTypeConverter<VolumeUnit> = {
  [VolumeUnit.Liters]: (value) => value,
  [VolumeUnit.Tablespoons]: (value) => litersToTablespoons(value),
  [VolumeUnit.Cups]: (value) => litersToCups(value),
  [VolumeUnit.CubicFeet]: (value) => litersToCubicFeet(value),
  [VolumeUnit.Gallons]: (value) => litersToGallons(value),
  [VolumeUnit.CubicInches]: (value) => litersToCubicInches(value),
};

const tablespoonsConverter: UnitTypeConverter<VolumeUnit> = {
  [VolumeUnit.Liters]: (value) => tablespoonsToLiters(value),
  [VolumeUnit.Tablespoons]: (value) => value,
  [VolumeUnit.Cups]: (value) => litersToCups(tablespoonsToLiters(value)),
  [VolumeUnit.CubicFeet]: (value) =>
    litersToCubicFeet(tablespoonsToLiters(value)),
  [VolumeUnit.Gallons]: (value) => litersToGallons(tablespoonsToLiters(value)),
  [VolumeUnit.CubicInches]: (value) =>
    litersToCubicInches(tablespoonsToLiters(value)),
};

const cupsConverter: UnitTypeConverter<VolumeUnit> = {
  [VolumeUnit.Liters]: (value) => cupsToLiters(value),
  [VolumeUnit.Tablespoons]: (value) => tablespoonsToLiters(cupsToLiters(value)),
  [VolumeUnit.Cups]: (value) => value,
  [VolumeUnit.CubicFeet]: (value) => litersToCubicFeet(cupsToLiters(value)),
  [VolumeUnit.Gallons]: (value) => litersToGallons(cupsToLiters(value)),
  [VolumeUnit.CubicInches]: (value) => litersToCubicInches(cupsToLiters(value)),
};

const cubicFeetConverter: UnitTypeConverter<VolumeUnit> = {
  [VolumeUnit.Liters]: (value) => cubicFeetToLiters(value),
  [VolumeUnit.Tablespoons]: (value) =>
    tablespoonsToLiters(cubicFeetToLiters(value)),
  [VolumeUnit.Cups]: (value) => litersToCups(cubicFeetToLiters(value)),
  [VolumeUnit.CubicFeet]: (value) => value,
  [VolumeUnit.Gallons]: (value) => litersToGallons(cubicFeetToLiters(value)),
  [VolumeUnit.CubicInches]: (value) =>
    litersToCubicInches(cubicFeetToLiters(value)),
};

const gallonsConverter: UnitTypeConverter<VolumeUnit> = {
  [VolumeUnit.Liters]: (value) => gallonsToLiters(value),
  [VolumeUnit.Tablespoons]: (value) =>
    tablespoonsToLiters(gallonsToLiters(value)),
  [VolumeUnit.Cups]: (value) => litersToCups(gallonsToLiters(value)),
  [VolumeUnit.CubicFeet]: (value) => litersToCubicFeet(gallonsToLiters(value)),
  [VolumeUnit.Gallons]: (value) => value,
  [VolumeUnit.CubicInches]: (value) =>
    litersToCubicInches(gallonsToLiters(value)),
};

const cubicInchesConverter: UnitTypeConverter<VolumeUnit> = {
  [VolumeUnit.Liters]: (value) => cubicInchesToLiters(value),
  [VolumeUnit.Tablespoons]: (value) =>
    tablespoonsToLiters(cubicInchesToLiters(value)),
  [VolumeUnit.Cups]: (value) => litersToCups(cubicInchesToLiters(value)),
  [VolumeUnit.CubicFeet]: (value) =>
    litersToCubicFeet(cubicInchesToLiters(value)),
  [VolumeUnit.Gallons]: (value) => litersToGallons(cubicInchesToLiters(value)),
  [VolumeUnit.CubicInches]: (value) => value,
};



class VolumeBase {
  // asdad
}

class CubeConverter extends VolumeBase {

}