import { gallonsToLiters, tablespoonsToLiters, litersToCups, litersToCubicFeet, litersToCubicInches } from ".";
import { VolumeUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [VolumeUnit.Liters]: (value) => gallonsToLiters(value),
    [VolumeUnit.Tablespoons]: (value) =>
      tablespoonsToLiters(gallonsToLiters(value)),
    [VolumeUnit.Cups]: (value) => litersToCups(gallonsToLiters(value)),
    [VolumeUnit.CubicFeet]: (value) => litersToCubicFeet(gallonsToLiters(value)),
    [VolumeUnit.Gallons]: (value) => value,
    [VolumeUnit.CubicInches]: (value) =>
      litersToCubicInches(gallonsToLiters(value)),
  } as UnitTypeConverter<VolumeUnit> ;