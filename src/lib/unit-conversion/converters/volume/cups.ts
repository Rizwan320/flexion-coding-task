import { cupsToLiters, tablespoonsToLiters, litersToCubicFeet, litersToGallons, litersToCubicInches } from ".";
import { VolumeUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [VolumeUnit.Liters]: (value) => cupsToLiters(value),
    [VolumeUnit.Tablespoons]: (value) => tablespoonsToLiters(cupsToLiters(value)),
    [VolumeUnit.Cups]: (value) => value,
    [VolumeUnit.CubicFeet]: (value) => litersToCubicFeet(cupsToLiters(value)),
    [VolumeUnit.Gallons]: (value) => litersToGallons(cupsToLiters(value)),
    [VolumeUnit.CubicInches]: (value) => litersToCubicInches(cupsToLiters(value)),
  } as UnitTypeConverter<VolumeUnit>;