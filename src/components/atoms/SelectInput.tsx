import React from "react";
import { Select, MenuItem } from "@mui/material";
import useWindowWidth from "../hook/useWindowWidth";

interface SelectButtonProps {
  options: { code: string; name: string }[];
  onSelect: (option: string) => void;
  defaultValue?: string;
  style?: React.CSSProperties;
}

const SelectInput: React.FC<SelectButtonProps> = ({
  options,
  onSelect,
  defaultValue,
  style,
}) => {
  const windowWidth = useWindowWidth();

  return (
    <Select
      style={style}
      sx={{
        "& .MuiSelect-select": {
          padding: windowWidth < 900 ? "8px !important" : "14px !important", // Usa !important para forzar el estilo
        },
      }}
      onChange={(e) => onSelect(e.target.value as string)}
      defaultValue={defaultValue}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option.code}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectInput;
