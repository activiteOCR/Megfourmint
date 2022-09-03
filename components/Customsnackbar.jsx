import React, { forwardRef  } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Customsnackbar({open, setOpen, message, iconSeverity}) {

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        };
        setOpen(false);
    }

  return (      
        <Snackbar
            open={open || false}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert
            style={{
                fontSize: "20px",
                backgroundColor: "#ffdd00",
                color: "black",
            }}
            onClose={handleClose}
            severity= {iconSeverity === true ? "warning" : "success" }
            sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
  )
}