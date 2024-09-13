import { tablespoonsToLiters, litersToCups, litersToCubicFeet, litersToGallons, litersToCubicInches } from ".";
import { VolumeUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [VolumeUnit.Liters]: (value) => tablespoonsToLiters(value),
    [VolumeUnit.Tablespoons]: (value) => value,
    [VolumeUnit.Cups]: (value) => litersToCups(tablespoonsToLiters(value)),
    [VolumeUnit.CubicFeet]: (value) =>
      litersToCubicFeet(tablespoonsToLiters(value)),
    [VolumeUnit.Gallons]: (value) => litersToGallons(tablespoonsToLiters(value)),
    [VolumeUnit.CubicInches]: (value) =>
      litersToCubicInches(tablespoonsToLiters(value)),
  } as UnitTypeConverter<VolumeUnit>;