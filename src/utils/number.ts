function roundToTenth(value: number): number {
  return Math.round(value * 10) / 10;
}

export function compareRoundedValues(value1: number, value2: number): boolean {
  const roundedValue1 = roundToTenth(value1);
  const roundedValue2 = roundToTenth(value2);

  return roundedValue1 === roundedValue2;
}
