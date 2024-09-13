import { expect } from "@storybook/test";
import {VolumeUnit} from '../../constants';
import VolumeConverter from "./index";

describe("Volume Converter Tests", () => {
    test("Convert Liters to Tablespoons", () => {
      expect(
        VolumeConverter[VolumeUnit.Liters][VolumeUnit.Tablespoons](1)
      ).toBeCloseTo(67.628);
    });
  
    test("Convert Tablespoons to Liters", () => {
      expect(
        VolumeConverter[VolumeUnit.Tablespoons][VolumeUnit.Liters](67.628)
      ).toBeCloseTo(1);
    });
  
    test("Convert Cups to Liters", () => {
      expect(VolumeConverter[VolumeUnit.Cups][VolumeUnit.Liters](1)).toBeCloseTo(
        0.236588
      );
    });
  
    test("Convert Liters to Cups", () => {
      expect(
        VolumeConverter[VolumeUnit.Liters][VolumeUnit.Cups](0.236588)
      ).toBeCloseTo(1);
    });
  
    // Add more test cases for other conversions as needed
  });
  