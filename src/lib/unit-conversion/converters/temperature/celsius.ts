import { celsiusToKelvin, kelvinToRankine } from ".";
import { TemperatureUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default {
    [TemperatureUnit.Kelvin]: (value) => celsiusToKelvin(value),
    [TemperatureUnit.Celsius]: (value) => value,
    [TemperatureUnit.Fahrenheit]: (value) => (value * 9) / 5 + 32,
    [TemperatureUnit.Rankine]: (value) => kelvinToRankine(celsiusToKelvin(value)),
  } as UnitTypeConverter<TemperatureUnit>;