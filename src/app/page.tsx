"use client";
import React, { useState } from "react";
import UnitConversion from "./components/UnitConversion/UnitConversion";
import { UnitConversionResultType } from "./types/types";
import Table from "@/common/components/Table/Table";

export default function Home() {
  const [history, setHistory] = useState<UnitConversionResultType[]>([]);

  const historyRowData: string[][] = [];
  history.forEach((item) => {
    const { inputValue, inputUnit, targetUnit, studentValue, result } = item;
    historyRowData.push([
      inputValue!.toString(),
      inputUnit!.toString(),
      targetUnit!.toString(),
      studentValue!.toString(),
      result,
    ]);
  });
  return (
    <>
      <UnitConversion
        onUnitConversion={(conversion) => {
          setHistory([...history, conversion]);
        }}
      />
      <Table
        columns={[
          "Input Numerical Value",
          "Input Unit of Measure",
          "Target Unit of Measure",
          "Student Response",
          "Output Value",
        ]}
        title="Conversion History"
        description="This is the list of recent data conversion"
        rows={historyRowData}
      />
    </>
  );
}
