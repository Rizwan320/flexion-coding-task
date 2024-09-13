import { FAHRENHEIT_CONSTANT, rankineToKelvin } from ".";
import { TemperatureUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [TemperatureUnit.Kelvin]: (value) => rankineToKelvin(value),
    [TemperatureUnit.Celsius]: (value) => (value - FAHRENHEIT_CONSTANT) * 5 / 9,
    [TemperatureUnit.Fahrenheit]: (value) => value - FAHRENHEIT_CONSTANT,
    [TemperatureUnit.Rankine]: (value) => value,
  } as UnitTypeConverter<TemperatureUnit>