import { kelvinToCelsius, kelvinToFahrenheit, kelvinToRankine } from ".";
import { TemperatureUnit } from "../../constants";
import { UnitTypeConverter } from "../../types";

export default  {
    [TemperatureUnit.Kelvin]: (value) => value,
    [TemperatureUnit.Celsius]: (value) => kelvinToCelsius(value),
    [TemperatureUnit.Fahrenheit]: (value) => kelvinToFahrenheit(value),
    [TemperatureUnit.Rankine]: (value) => kelvinToRankine(value),
  } as UnitTypeConverter<TemperatureUnit>;