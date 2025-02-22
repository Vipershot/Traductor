import { Box, Typography } from "@mui/material";
import SelectInput from "../../atoms/SelectInput";
import useWindowWidth from "../../hook/useWindowWidth";

interface Props {
  inSelect: (code: string) => void;
  inOptions: { code: string; name: string }[];
  outSelect: (code: string) => void;
  outOptions: { code: string; name: string }[];
}

export const InputLenguage = ({
  inSelect,
  inOptions,
  outSelect,
  outOptions,
}: Props) => {
  const windowWidth = useWindowWidth();

  return (
    <Box sx={{ width: windowWidth < 900 ? "100%" : "auto" }}>
      <Typography variant="h2" sx={{ fontSize: windowWidth < 900 ? 18 : 22, textAlign: "center" }}>
        Selecciona los idiomas
      </Typography>
      <Box display={"flex"} gap={6} marginTop={4} sx={{ width: windowWidth < 900 ? "100%" : "auto" }}>
        <Box display={"flex"} flexDirection={"column"} sx={{ width: windowWidth < 900 ? "50%" : "auto" }} gap={1}>
          <p style={{ fontSize: windowWidth < 900 ? 16 : 20, textAlign: windowWidth < 900 ? "initial" : "center" }}>Idioma de entrada</p>
          <SelectInput
            style={{ width: windowWidth < 900 ? 140 : 180 }}
            onSelect={inSelect}
            options={inOptions}
            defaultValue="es"
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} sx={{ width: windowWidth < 900 ? "50%" : "auto" }} gap={1}>
          <p style={{ fontSize: windowWidth < 900 ? 16 : 20, textAlign: windowWidth < 900 ? "initial" : "center" }}>Idioma de Salida</p>
          <SelectInput
            style={{ width: windowWidth < 900 ? 140 :  180 }}
            onSelect={outSelect}
            options={outOptions}
            defaultValue="en"
          />
        </Box>
      </Box>
    </Box>
  );
};
