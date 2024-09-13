"use client";
import { Select as AntSelect } from "antd";
import React from "react";
import { FC } from "react";

interface SelectOption {
  value: string;
  label: React.JSX.Element;
}

interface SelectProps {
  onChange: (value: string) => void;
  placeholder: string;
  options: SelectOption[];
  id: string;
}

const Select: FC<SelectProps> = ({ placeholder, onChange, options, id }) => {
  return (
    <AntSelect
      id={id}
      style={{ width: "100%" }}
      className="mt-2"
      onChange={onChange}
      placeholder={placeholder}
      options={options}
    />
  );
};

export default Select;
