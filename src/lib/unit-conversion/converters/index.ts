import VolumeConverter from "./volume";
import TemperatureConverter from "./temperature";
import { CompleteUnitConverter, UnitType } from "../types";

export default {
  ...VolumeConverter,
  ...TemperatureConverter,
} as CompleteUnitConverter<UnitType>;
