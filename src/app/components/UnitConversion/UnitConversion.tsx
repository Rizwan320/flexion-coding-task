"use client";
import React, { FC, useEffect, useState } from "react";

import { compareRoundedValues } from "../../../utils/number";
import { FaArrowRightLong } from "react-icons/fa6";
import Input from "../../../common/components/Input/Input";
import {
  UnitConversionFormType,
  UnitConversionResultType,
} from "@/app/types/types";
import Select from "@/common/components/Select/Select";
import { quantityUnitKeys } from "@/lib/unit-conversion/constants";
import { UnitType } from "@/lib/unit-conversion/types";
import UnitConverters from "@/lib/unit-conversion/converters"

enum ConversionResult {
  Correct = "Correct",
  Incorrect = "Incorrect",
  Invalid = "Invalid",
}

export interface UnitConversionProps {
  onUnitConversion: (evaluation: UnitConversionResultType) => void;
}

const unitSelectOptions = quantityUnitKeys.map((item) => {
  return { value: item, label: <span>{item}</span> };
});

const UnitConversion: FC<UnitConversionProps> = ({ onUnitConversion }) => {
  const [formData, setFormData] = useState<UnitConversionFormType>({});
  const [result, setResult] = useState<ConversionResult>();

  const evaluateConversion = () => {
    const { inputValue, inputUnit, targetUnit, studentValue } = formData;

    // if all fields are not present, clear result
    if (!inputValue || !inputUnit || !targetUnit || !studentValue)
      return setResult(undefined);

    // if either input or target value is not a valid number, result = invalid
    if (isNaN(Number(inputValue)) || isNaN(Number(studentValue)))
      return setResult(ConversionResult.Invalid);

    const targetUnitConverter = UnitConverters[inputUnit]?.[targetUnit]

    // if unit converter does not exist for a particular unit, it means the units are of different quantity.
    if (!targetUnitConverter) return setResult(ConversionResult.Invalid);

    const convertedValue = targetUnitConverter(Number(inputValue));

    setResult(
      compareRoundedValues(convertedValue, Number(studentValue))
        ? ConversionResult.Correct
        : ConversionResult.Incorrect
    );
  };

  useEffect(() => {
    if (!result) return;
    onUnitConversion({ ...formData, result });
  }, [result]);

  return (
    <div className="flex justify-center mt-12 text-black">
      <div>
        <div className="text-lg font-medium ">
          <h1>Unit Conversion Evaluator</h1>
        </div>
        <div className="mt-6">
          <div className="lg:flex items-center gap-4">
            <div>
              <Input
                id="unit_value"
                name="unit-value"
                placeholder="Unit Value"
                onChange={(e) => {
                  setFormData({ ...formData, inputValue: e.target.value });
                }}
              />
            </div>
            <div className="pt-3 lg:pt-0">
              <Input
                id="student_value"
                name="student_value"
                placeholder="Student Input"
                onChange={(e) => {
                  setFormData({ ...formData, studentValue: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="pt-1 lg:pt-0">
            <div className="text-white flex items-center gap-3">
              <div className="w-full">
                <Select
                  id="given_unit"
                  onChange={(value) => {
                    setFormData({
                      ...formData,
                      inputUnit: value as UnitType,
                    });
                  }}
                  placeholder={"Input Unit"}
                  options={unitSelectOptions}
                />
              </div>
              <div className="text-black">
                <FaArrowRightLong />
              </div>
              <div className="w-full flex justify-end">
                <Select
                  id="target_unit"
                  onChange={(value) => {
                    setFormData({
                      ...formData,
                      targetUnit: value as UnitType,
                    });
                  }}
                  placeholder={"Target Unit"}
                  options={unitSelectOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            data-testid="evaluate"
            type="button"
            className="mt-3 bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              evaluateConversion();
            }}
          >
            Convert
          </button>
        </div>
        <div className="w-full mt-3 border border-gray-300 h-32 bg-blue-200 rounded-lg relative">
          <div
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            data-testid="conversion_result"
          >
            {result}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitConversion;
