import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// MUI
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const SimpleDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <img
        alt="CoViD-19 Landkreiskarte mit 7-Tage-Inzidenz"
        onClick={handleClickOpen}
        style={{
          width: 200,
          height: 200,
          display: "block",
          margin: "auto",
        }}
        src="https://rki-covid-api.now.sh/api/districts-map"
      ></img>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">
                    Wünsche oder Anregungen?
                </DialogTitle> */}
        <DialogActions>
          <Button onClick={handleClose} color="grey">
            <Close />
          </Button>
        </DialogActions>
        <DialogContent>
          <img
            alt="CoViD-19 Landkreiskarte mit 7-Tage-Inzidenz"
            direction="column"
            justify="center"
            style={{
              width: "90%",
              height: "90%",
              display: "block",
              margin: "auto",
            }}
            src="https://rki-covid-api.now.sh/api/districts-map"
          ></img>
        </DialogContent>
      </Dialog>
    </div>
  );
};
SimpleDialog.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(SimpleDialog);
