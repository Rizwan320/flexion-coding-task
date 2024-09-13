import { ChangeEventHandler, FC } from "react";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ id, name, placeholder, onChange }) => {
  return (
    <input
      data-testid={id}
      type="text"
      id={id}
      name={name}
      onChange={onChange}
      className="border border-gray-300 h-10 p-3 rounded-lg"
      placeholder={placeholder}
    />
  );
};

export default Input;
