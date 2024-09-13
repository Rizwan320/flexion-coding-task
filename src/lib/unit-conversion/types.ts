import { TemperatureUnit, VolumeUnit } from "./constants";

export type UnitType = TemperatureUnit | VolumeUnit;


/* 
    Type representing conversion methods from one unit to another within a single unit type,
    e.g., Celsius: { kelvin: (value) => {}, celsius: (value) => {} }
*/
export type UnitTypeConverter<T extends UnitType> = {
  [key in T]: (value: number) => number;
};

/* 
    Type representing a base converter requiring conversion methods for all possible unit type combinations.
    This encourages completeness and IDEs can assist in generating these combinations.
*/
export type CompleteUnitConverter<T extends UnitType> = {
  [key in T]: UnitTypeConverter<T>;
};
