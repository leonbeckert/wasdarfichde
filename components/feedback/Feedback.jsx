import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// MUI
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

// Components
import ThankYouFeedback from "./ThankYouFeedback";
import { setOpenThankYouFeedback } from "../../redux/actions/userActions";

/**
 * Opens a feedback dialog with a single input field
 * @param {*} props
 */
const Feedback = (props) => {
  const [feedback, setFeedback] = useState("");
  const [isopen, setOpen] = useState(false);

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    console.log("my man");
    axios.post("/createfeedback", {
      createdAt: new Date().toISOString(),
      feedback: feedback,
    });
    setOpen(false);
    props.setOpenThankYouFeedback(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <ThankYouFeedback />
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Feedback geben
        </Button>
        <Dialog
          open={isopen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Wünsche oder Anregungen?
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Gib uns Feedback!</DialogContentText>

            <TextField
              name="feedback"
              margin="dense"
              label="Es wäre cool, wenn..."
              value={feedback}
              type="feedback"
              onChange={handleChange}
              fullWidth
              multiline
              rows="3"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Abbrechen
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Senden
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
Feedback.propTypes = {
  user: PropTypes.object.isRequired,
  setOpenThankYouFeedback: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = {
  setOpenThankYouFeedback,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
