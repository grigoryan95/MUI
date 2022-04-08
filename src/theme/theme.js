import {createTheme} from "@material-ui/core";
import {MuiButton, MuiTextField} from "./overrides";

export const theme = createTheme({
  components: {
    MuiButton,
    MuiTextField
  },
});