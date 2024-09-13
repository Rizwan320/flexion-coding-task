import { UnitType } from "@/lib/unit-conversion/types";

export function enumValuesToStringArray<T extends Record<string, string>>(
  e: T
): string[] {
  return Object.keys(e);
}

export function keystoEnumMap<T extends UnitType>(
  e: T
): Record<string, T> {
  const map: Record<string, T> = {};
  Object.keys(e).map((key) => {
    map[key] = e;
  });
  return map;
}
