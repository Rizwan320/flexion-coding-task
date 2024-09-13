import { cubicInchesToLiters, tablespoonsToLiters, litersToCups, litersToCubicFeet, litersToGallons } from ".";
import { VolumeUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [VolumeUnit.Liters]: (value) => cubicInchesToLiters(value),
    [VolumeUnit.Tablespoons]: (value) =>
      tablespoonsToLiters(cubicInchesToLiters(value)),
    [VolumeUnit.Cups]: (value) => litersToCups(cubicInchesToLiters(value)),
    [VolumeUnit.CubicFeet]: (value) =>
      litersToCubicFeet(cubicInchesToLiters(value)),
    [VolumeUnit.Gallons]: (value) => litersToGallons(cubicInchesToLiters(value)),
    [VolumeUnit.CubicInches]: (value) => value,
  } as UnitTypeConverter<VolumeUnit>;