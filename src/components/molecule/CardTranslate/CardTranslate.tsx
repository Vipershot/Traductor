import { Box, Typography } from "@mui/material";
import useWindowWidth from "../../hook/useWindowWidth";

interface Props {
  children: React.ReactNode;
}

export const CardTranslate = ({ children }: Props) => {
  const windowWidth = useWindowWidth();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={2.5}
      gap={4}
    >
      <Typography variant="h1" sx={{ fontSize: windowWidth < 900 ? 26 : 36, marginTop: 2 }}>
        Traductor
      </Typography>
      {children}
    </Box>
  );
};
