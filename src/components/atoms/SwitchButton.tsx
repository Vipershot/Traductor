import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import React from 'react';
import { ReactNode } from 'react';

interface Props {
  onClick?: () => void;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
  checkedIconColor?: string;
  uncheckedIconColor?: string;
}

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: theme.palette.common.white,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.common.white,
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.grey[400],
  },
}));

export const SwitchButton = ({ onClick, checkedIcon, uncheckedIcon, checkedIconColor, uncheckedIconColor }: Props) => {
  const checkedIconWithColor = checkedIcon ? React.cloneElement(checkedIcon as React.ReactElement<any>, { style: { color: checkedIconColor } }) : null;
  const uncheckedIconWithColor = uncheckedIcon ? React.cloneElement(uncheckedIcon as React.ReactElement<any>, { style: { color: uncheckedIconColor } }) : null;

  return (
    <CustomSwitch
      onClick={onClick}
      defaultChecked
      icon={uncheckedIconWithColor}
      checkedIcon={checkedIconWithColor}
    />
  );
};
