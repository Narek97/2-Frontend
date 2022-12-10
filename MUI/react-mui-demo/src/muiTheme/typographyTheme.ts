import { Box, colors, createTheme, styled } from "@mui/material";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        // root: ({ ownerState }) => ({
        //   ...((ownerState.variant === "body1" ||
        //     ownerState.variant === "body2") && {
        //     backgroundColor: "#202020",
        //     color: "#fff",
        //   }),
        // }),
      },
    },
    MuiButton: {
      // defaultProps: {
      //   variant: "outlined",
      // },
      // styleOverrides: {
      //   root: {
      //     fontSize: "40px",
      //   },
      // },
    },
  },
});

export const StyleBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "200px",
  backgroundColor: theme.status.danger,
}));
