import { FAHRENHEIT_CONSTANT, fahrenheitToKelvin } from ".";
import { TemperatureUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [TemperatureUnit.Kelvin]: (value) => fahrenheitToKelvin(value),
    [TemperatureUnit.Celsius]: (value) => ((value - 32) * 5) / 9,
    [TemperatureUnit.Fahrenheit]: (value) => value,
    [TemperatureUnit.Rankine]: (value) => value + FAHRENHEIT_CONSTANT,
  } as UnitTypeConverter<TemperatureUnit>;