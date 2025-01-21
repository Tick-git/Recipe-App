import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
  children?: React.ReactNode;
};

function WizardListBox({ children }: Props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      border={1}
      overflow={"scroll"}
      height={"400px"}
      sx={{ padding: "1rem", borderColor: grey[300] }}
    >
      {children}
    </Box>
  );
}

export default WizardListBox;
