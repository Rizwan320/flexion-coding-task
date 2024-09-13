import { UnitType } from "@/lib/unit-conversion/types";

export interface UnitConversionFormType {
  inputValue?: string;
  inputUnit?: UnitType;
  targetUnit?: UnitType;
  studentValue?: string;
}

export interface UnitConversionResultType extends UnitConversionFormType {
  result: string;
}


