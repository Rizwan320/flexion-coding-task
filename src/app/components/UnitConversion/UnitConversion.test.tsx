import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UnitConversion, { UnitConversionProps } from "./UnitConversion";
import { fireEvent } from "@storybook/test";

const defaultProps: UnitConversionProps = {
  onUnitConversion(evaluation) {},
};

const setupRender = (props?: Partial<UnitConversionProps>) => {
  /*
    We pass the default props and take partial props which are required to be changed for tests
  */
  render(<UnitConversion {...{ ...defaultProps, ...props }} />);

  const getUnitInput = () => screen.getByTestId("unit_value");
  const getStudentInput = () => screen.getByTestId("student_value");
  const getEvaluateButton = () => screen.getByTestId("evaluate");
  const getConversionResult = () => screen.getByTestId("conversion_result");

  // antD components have different architecture, need more investigations into testing components from antD
  const getInputUnitSelect = () => document.querySelector("#given_unit");
  const getTargetUnitSelect = () => document.querySelector("#target_unit");

  return {
    getUnitInput,
    getStudentInput,
    getInputUnitSelect,
    getTargetUnitSelect,
    getEvaluateButton,
    getConversionResult,
  };
};

describe("Unit Conversion", () => {
  it("renders all the necessary elements", () => {
    const {
      getUnitInput,
      getStudentInput,
      getInputUnitSelect,
      getTargetUnitSelect,
      getEvaluateButton,
      getConversionResult,
    } = setupRender();

    expect(getUnitInput()).toBeInTheDocument();
    expect(getStudentInput()).toBeInTheDocument();
    expect(getInputUnitSelect()).toBeInTheDocument();
    expect(getTargetUnitSelect()).toBeInTheDocument();
    expect(getEvaluateButton()).toBeInTheDocument();
    expect(getConversionResult()).toBeInTheDocument();
  });
  // write more tests
});
