import Button from "@mui/material/Button";

interface Props {
  onClick?: () => void;
  text?: string;
}

export const Buttons = ({ onClick, text }: Props) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};
