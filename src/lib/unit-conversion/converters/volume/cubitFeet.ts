import { cubicFeetToLiters, tablespoonsToLiters, litersToCups, litersToGallons, litersToCubicInches } from ".";
import { VolumeUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [VolumeUnit.Liters]: (value) => cubicFeetToLiters(value),
    [VolumeUnit.Tablespoons]: (value) =>
      tablespoonsToLiters(cubicFeetToLiters(value)),
    [VolumeUnit.Cups]: (value) => litersToCups(cubicFeetToLiters(value)),
    [VolumeUnit.CubicFeet]: (value) => value,
    [VolumeUnit.Gallons]: (value) => litersToGallons(cubicFeetToLiters(value)),
    [VolumeUnit.CubicInches]: (value) =>
      litersToCubicInches(cubicFeetToLiters(value)),
  } as UnitTypeConverter<VolumeUnit>;