import { TextField } from '@mui/material';

interface TextInputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ value, onChange }: TextInputProps) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      variant="outlined"
      sx={{ width: {md:'90%', lg:'500px'} }}
    />
  )
}
