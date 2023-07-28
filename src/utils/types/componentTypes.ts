import { type IconType } from "react-icons";

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  Icon?: IconType;
  outlined?: boolean;
  label?: string;
  shadow?: boolean;
  errormessage?: string;
  error?: boolean;
}

export interface SelectOption {
  value: string;
  name: string;
}

export interface SelectInputProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  outlined?: boolean;
  label?: string;
  shadow?: boolean;
  errormessage?: string;
  defaultOption?: {
    name: string;
    value: string;
  };
  error?: boolean;
  options: SelectOption[];
}

export type AutoCompleteProps = {
  multiple?: boolean;
  Icon?: IconType;
  onSelected: (options: { name: string; value: unknown }[]) => void;
  options: OptionType[] | [];
} & TextInputProps;

export type OptionType<T = unknown> = {
  name: string;
  value: T;
  selected?: boolean;
};
