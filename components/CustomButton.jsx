import React from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

export const CustomButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #673AB7 30%, #bda7e3 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />);

export default CustomButton;
