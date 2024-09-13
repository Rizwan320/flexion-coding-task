import { litersToTablespoons, litersToCups, litersToCubicFeet, litersToGallons, litersToCubicInches } from ".";
import { VolumeUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [VolumeUnit.Liters]: (value) => value,
    [VolumeUnit.Tablespoons]: (value) => litersToTablespoons(value),
    [VolumeUnit.Cups]: (value) => litersToCups(value),
    [VolumeUnit.CubicFeet]: (value) => litersToCubicFeet(value),
    [VolumeUnit.Gallons]: (value) => litersToGallons(value),
    [VolumeUnit.CubicInches]: (value) => litersToCubicInches(value),
  } as UnitTypeConverter<VolumeUnit> ;