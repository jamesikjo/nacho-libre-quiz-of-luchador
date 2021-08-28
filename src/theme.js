import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#ff3333",
    },
  },
  typography: {
    fontFamily: "PistolGripPump, Chilanka, serif",
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      backgroundColor: "#e6e6e6",
      fontWeight: "bold",
      color: theme.palette.primary.main,
      fontSize: "1rem",
    },
    outlinedSizeSmall: {
      fontSize: "1rem",
    },
  },
  MuiRadio: {
    root: {
      "& .MuiSvgIcon-root": {
        height: 18,
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
      color: theme.palette.primary.main,
      width: "0.5em",
    },
  },
  MuiFormHelperText: {
    root: {
      textAlign: "center",
      color: theme.palette.secondary.main,
    },
  },
  MuiFormLabel: {
    root: {
      "&.Mui-error": {
        color: theme.palette.primary.main,
      },
    },
  },
};

export default theme;
