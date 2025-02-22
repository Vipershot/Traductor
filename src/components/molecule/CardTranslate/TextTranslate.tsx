import { Box } from "@mui/material";
import { TextInput } from "../../atoms/TextInput";
import { Buttons } from "../../atoms/Buttons";
import useWindowWidth from "../../hook/useWindowWidth";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  translateValue: string;
  onCopy: () => void;
}

export const TextTranslate = ({
  onChange,
  onClick,
  translateValue,
  onCopy,
}: Props) => {
  const windowWidth = useWindowWidth();

  return (
    <Box
      display={"flex"}
      flexDirection={windowWidth < 900 ? "column" : "row"}
      alignItems={"center"}
      sx={{ width: windowWidth < 900 ? "100%" : "auto" }}
      gap={4}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ width: windowWidth < 900 ? "100%" : "auto" }}
        gap={2}
      >
        <p style={{ fontSize: windowWidth < 900 ? 16 : 18 }}>
          Texto a traducir
        </p>
        <TextInput onChange={onChange} />
        <Buttons onClick={onClick} text="Traducir" />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ width: windowWidth < 900 ? "100%" : "auto" }}
        gap={2}
      >
        <p style={{ fontSize: windowWidth < 900 ? 16 : 18 }}>Texto traducido</p>
        <TextInput value={translateValue} />
        <Buttons onClick={onCopy} text="Copiar" />
      </Box>
    </Box>
  );
};
